package io.kotest.core.spec.style.scopes

import io.kotest.core.Tag
import io.kotest.core.extensions.TestCaseExtension
import io.kotest.core.names.TestName
import io.kotest.core.test.EnabledIf
import io.kotest.core.test.TestCaseSeverityLevel
import io.kotest.core.test.TestScope
import io.kotest.core.test.config.UnresolvedTestConfig
import kotlin.time.Duration

@Deprecated("Renamed to FreeSpecRootContext. Deprecated since 5.0")
typealias FreeSpecRootContext = FreeSpecRootScope

data class FreeSpecContextConfigBuilder(val name: String, val config: UnresolvedTestConfig)

interface FreeSpecRootScope : RootScope {

   // eg, "this test" - { } // adds a container test
   infix operator fun String.minus(test: suspend FreeSpecContainerScope.() -> Unit) {
      addContainer(TestName(this), false, null) { FreeSpecContainerScope(this).test() }
   }

   // "this test" { } // adds a leaf test
   infix operator fun String.invoke(test: suspend FreeSpecTerminalScope.() -> Unit) {
      addTest(TestName(this), false, null) { FreeSpecTerminalScope(this).test() }
   }

   /**
    * Starts a config builder, which can be added to the scope by invoking [minus] on the returned value.
    *
    * eg, "this test".config(...) - { }
    */
   fun String.config(
      enabled: Boolean? = null,
      invocations: Int? = null,
      threads: Int? = null,
      tags: Set<Tag>? = null,
      timeout: Duration? = null,
      extensions: List<TestCaseExtension>? = null,
      enabledIf: EnabledIf? = null,
      invocationTimeout: Duration? = null,
      severity: TestCaseSeverityLevel? = null,
      failfast: Boolean? = null,
   ): FreeSpecContextConfigBuilder {
      val config = UnresolvedTestConfig(
         enabled = enabled,
         tags = tags,
         extensions = extensions,
         timeout = timeout,
         invocationTimeout = invocationTimeout,
         enabledIf = enabledIf,
         invocations = invocations,
         threads = threads,
         severity = severity,
         failfast = failfast,
      )
      return FreeSpecContextConfigBuilder(this, config)
   }

   /**
    * Adds the contained config and test to this scope as a container test.
    *
    * eg, "this test".config(...) - { }
    */
   infix operator fun FreeSpecContextConfigBuilder.minus(test: suspend FreeSpecContainerScope.() -> Unit) {
      addContainer(TestName(name), false, config) { FreeSpecContainerScope(this).test() }
   }

   /**
    * Adds a configured test to this scope as a leaf test.
    *
    * eg, "this test".config(...) { }
    */
   fun String.config(
      enabled: Boolean? = null,
      invocations: Int? = null,
      threads: Int? = null,
      tags: Set<Tag>? = null,
      timeout: Duration? = null,
      extensions: List<TestCaseExtension>? = null,
      enabledIf: EnabledIf? = null,
      invocationTimeout: Duration? = null,
      severity: TestCaseSeverityLevel? = null,
      failfast: Boolean? = null,
      test: suspend TestScope.() -> Unit,
   ) {
      val config = UnresolvedTestConfig(
         enabled = enabled,
         tags = tags,
         extensions = extensions,
         timeout = timeout,
         invocationTimeout = invocationTimeout,
         enabledIf = enabledIf,
         invocations = invocations,
         threads = threads,
         severity = severity,
         failfast = failfast
      )
      addTest(TestName(this), false, config, test)
   }
}

