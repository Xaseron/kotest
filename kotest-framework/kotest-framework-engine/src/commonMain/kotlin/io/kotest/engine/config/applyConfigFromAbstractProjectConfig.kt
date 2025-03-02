package io.kotest.engine.config

import io.kotest.core.config.AbstractProjectConfig
import io.kotest.core.config.Configuration
import io.kotest.core.listeners.AfterProjectListener
import io.kotest.core.listeners.BeforeProjectListener

/**
 * Applies settings from a [AbstractProjectConfig] instance to the given [Configuration].
 */
internal fun applyConfigFromProjectConfig(config: AbstractProjectConfig, configuration: Configuration) {

   // assertions
   config.assertionMode?.let { configuration.assertionMode = it }
   config.globalAssertSoftly?.let { configuration.globalAssertSoftly = it }

   // outputs
   config.displaySpecIfNoActiveTests?.let { configuration.displaySpecIfNoActiveTests = it }

   // project run options
   config.failOnIgnoredTests?.let { configuration.failOnIgnoredTests = it }
   config.failOnEmptyTestSuite?.let { configuration.failOnEmptyTestSuite = it }
   config.testCaseOrder?.let { configuration.testCaseOrder = it }
   config.specExecutionOrder?.let { configuration.specExecutionOrder = it }
   config.writeSpecFailureFile?.let { configuration.writeSpecFailureFile = it }

   // concurrency
   config.parallelism?.let { configuration.parallelism = it }
   config.concurrentTests?.let { configuration.concurrentTests = it }
   config.concurrentSpecs?.let { configuration.concurrentSpecs = it }
   config.isolationMode?.let { configuration.isolationMode = it }
   config.dispatcherAffinity?.let { configuration.dispatcherAffinity = it }

   // timeouts
   config.timeout?.let { configuration.timeout = it.inWholeMilliseconds }
   config.invocationTimeout?.let { configuration.invocationTimeout = it }
   config.projectTimeout?.let { configuration.projectTimeout = it }

   // test names
   config.includeTestScopePrefixes?.let { configuration.includeTestScopeAffixes = it }
   config.testNameRemoveWhitespace?.let { configuration.removeTestNameWhitespace = it }
   config.testNameAppendTags?.let { configuration.testNameAppendTags = it }
   config.duplicateTestNameMode?.let { configuration.duplicateTestNameMode = it }
   config.testNameCase?.let { configuration.testNameCase = it }

   // config
   config.defaultTestCaseConfig?.let { configuration.defaultTestConfig = it }

   // debug
   config.coroutineDebugProbes?.let { configuration.coroutineDebugProbes = it }

   // the project config object allows us to define project event methods, which we
   // wrap into a project listener and register as normal
   val projectListener = object : BeforeProjectListener, AfterProjectListener {

      override suspend fun beforeProject() {
         config.beforeProject()
         config.beforeAll()
      }

      override suspend fun afterProject() {
         config.afterProject()
         config.afterAll()
      }
   }

   val exts = config.listeners() + listOf(projectListener) + config.extensions() + config.filters()
   exts.forEach { configuration.registry().add(it) }
}
