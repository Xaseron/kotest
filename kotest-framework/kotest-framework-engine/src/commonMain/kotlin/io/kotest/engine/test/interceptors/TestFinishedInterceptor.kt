package io.kotest.engine.test.interceptors

import io.kotest.core.test.TestCase
import io.kotest.core.test.TestScope
import io.kotest.core.test.TestResult
import io.kotest.engine.test.TestCaseExecutionListener

internal class TestFinishedInterceptor(private val listener: TestCaseExecutionListener) : TestExecutionInterceptor {
   override suspend fun intercept(
      test: suspend (TestCase, TestScope) -> TestResult
   ): suspend (TestCase, TestScope) -> TestResult = { testCase, context ->
      val result = test(testCase, context)
      when (result) {
         is TestResult.Ignored -> listener.testIgnored(testCase, result.reason)
         else -> listener.testFinished(testCase, result)
      }
      result
   }
}
