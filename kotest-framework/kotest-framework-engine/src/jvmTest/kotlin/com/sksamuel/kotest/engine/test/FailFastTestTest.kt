package com.sksamuel.kotest.engine.test

import io.kotest.core.spec.style.FreeSpec
import io.kotest.core.spec.style.FunSpec
import io.kotest.engine.TestEngineLauncher
import io.kotest.engine.listener.CollectingTestEngineListener
import io.kotest.matchers.maps.shouldNotContainKey
import io.kotest.matchers.shouldBe

class FailFastTestTest : FunSpec() {
   init {

      test("support fail fast on fun spec") {

         val listener = CollectingTestEngineListener()

         TestEngineLauncher(listener)
            .withClasses(FailFastFunSpec::class)
            .launch()

         val results = listener.tests.mapKeys { it.key.name.testName }
         results["a"]?.isSuccess shouldBe true
         results["b"]?.isError shouldBe true
         results["c"]?.isIgnored shouldBe true
         results["d"]?.isIgnored shouldBe true
         results.shouldNotContainKey("e")
         results["t"]?.isSuccess shouldBe true
         results["u"]?.isError shouldBe true
         results["v"]?.isIgnored shouldBe true
         results["w"]?.isIgnored shouldBe true
         results.shouldNotContainKey("x")
      }

      test("support fail fast on free spec") {

         val listener = CollectingTestEngineListener()

         TestEngineLauncher(listener)
            .withClasses(FailFastFreeSpec::class)
            .launch()

         val results = listener.tests.mapKeys { it.key.name.testName }
         results["a"]?.isSuccess shouldBe true
         results["b"]?.isError shouldBe true
         results["c"]?.isIgnored shouldBe true
         results["d"]?.isIgnored shouldBe true
         results.shouldNotContainKey("e")
         results["t"]?.isSuccess shouldBe true
         results["u"]?.isError shouldBe true
         results["v"]?.isIgnored shouldBe true
         results["w"]?.isIgnored shouldBe true
         results.shouldNotContainKey("x")
      }
   }
}

private class FailFastFunSpec() : FunSpec() {
   init {
      context("context with fail fast enabled").config(failfast = true) {
         test("a") {} // pass
         test("b") { error("boom") }
         test("c") {} // will be skipped
         context("d") {  // skipped
            test("e") {} // skipped
         }
      }
      context("context") {
         context("nested context with fail fast enabled").config(failfast = true) {
            test("t") {} // pass
            test("u") { error("boom") }
            test("v") {} // will be skipped
            context("w") {  // skipped
               test("x") {} // skipped
            }
         }
      }
   }
}

private class FailFastFreeSpec() : FreeSpec() {
   init {
      "context with fail fast enabled".config(failfast = true) - {
         "a" {} // pass
         "b" { error("boom") }
         "c" {} // will be skipped
         "d" - {  // skipped
            "e" {} // skipped
         }
      }
      "context" - {
         "nested context with fail fast enabled".config(failfast = true) - {
            "t" {} // pass
            "u" { error("boom") }
            "v" {} // will be skipped
            "w" - {  // skipped
               "x" {} // skipped
            }
         }
      }
   }
}
