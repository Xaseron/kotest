package io.kotest.engine.test.status

import io.kotest.core.descriptors.Descriptor
import io.kotest.core.filter.TestFilter
import io.kotest.core.filter.TestFilterResult
import io.kotest.core.internal.KotestEngineProperties
import io.kotest.core.test.Enabled
import io.kotest.core.test.TestCase
import io.kotest.mpp.env
import io.kotest.mpp.log
import io.kotest.mpp.sysprop

/**
 * Applies test and spec filters using sysprop or env vars from [KotestEngineProperties.filterTests]
 * and [KotestEngineProperties.filterSpecs].
 *
 * These work similarly to gradle filters in --tests described at:
 * https://docs.gradle.org/current/userguide/java_testing.html#full_qualified_name_pattern
 */
internal object SystemPropertyTestFilterEnabledExtension : TestEnabledExtension {

   private fun syspropOrEnv(name: String) = sysprop(name) ?: env(name) ?: ""

   override fun isEnabled(testCase: TestCase): Enabled {

      val excluded = syspropOrEnv(KotestEngineProperties.filterTests)
         .propertyToRegexes()
         .map { it.toTestFilter().filter(testCase.descriptor) }
         .filterIsInstance<TestFilterResult.Exclude>()
         .firstOrNull()

      log { "SystemPropertyTestFilterEnabledExtension: ${testCase.descriptor} excluded = $excluded" }
      return if (excluded == null) Enabled.enabled else Enabled.disabled(excluded.reason)
   }
}

private fun Regex.toTestFilter(): TestFilter = object : TestFilter {
   override fun filter(descriptor: Descriptor): TestFilterResult {
      val name = descriptor.path(false).value
      return if (this@toTestFilter.matches(name))
         TestFilterResult.Include
      else
         TestFilterResult.Exclude("Excluded by test filter regex: ${this@toTestFilter}")
   }
}

private fun String.propertyToRegexes(): List<Regex> =
   this.split(",")
      .filter { it.isNotBlank() }
      .map { it.replace("*", ".*?").toRegex() }
