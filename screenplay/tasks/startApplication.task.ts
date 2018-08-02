import { browser } from "protractor";
import { Open, PerformsTasks, step, Task } from "serenity-js/lib/screenplay-protractor";

export class Start implements Task {

  public static openApplication() {
    return new Start();
  }

  @step("actor opens the browser")
  performAs(actor: PerformsTasks): PromiseLike<void> {
    browser.waitForAngularEnabled(false);
    return actor.attemptsTo(Open.browserOn(""));
  }
}
