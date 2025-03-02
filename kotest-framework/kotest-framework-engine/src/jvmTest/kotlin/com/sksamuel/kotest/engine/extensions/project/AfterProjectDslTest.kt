package com.sksamuel.kotest.engine.extensions.project

import io.kotest.core.config.Configuration
import io.kotest.core.listeners.ProjectListener
import io.kotest.core.spec.style.FunSpec
import io.kotest.engine.TestEngineLauncher
import io.kotest.engine.listener.NoopTestEngineListener
import io.kotest.matchers.shouldBe

class AfterProjectDslTest : FunSpec({

   test("afterProject in spec should be fired") {

      var fired = false

      val c = Configuration()
      c.registry().add(object : ProjectListener {
         override suspend fun afterProject() {
            fired = true
         }
      })

      TestEngineLauncher(NoopTestEngineListener)
         .withClasses(DummySpec6::class)
         .withConfiguration(c)
         .launch()

      fired shouldBe true

   }
})

private var fired = false

private class DummySpec6 : FunSpec({

   afterProject {
      fired = true
   }

   test("a") {}
})
