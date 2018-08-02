import { browser } from "protractor";
import { Text, Enter, Click, Switch } from "serenity-js/lib/serenity-protractor";
import { Open, PerformsTasks, step, Task, Wait, Duration, Execute} from "serenity-js/lib/screenplay-protractor";
import { LogisticareLocators } from "../../screenplay/locators/Logisticarelocators";

export class Login implements Task {

  static toApplication(username: string, password: string) {
    return new Login(username, password);
  }

  @step("actor login in to the application")
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
        Click.on(LogisticareLocators.loginButton),
            Wait.for(Duration.ofSeconds(3)),
            Enter.theValue(this.username).into(LogisticareLocators.usernameTextbox),
            Enter.theValue(this.password).into(LogisticareLocators.passwordTextbox),
            Click.on(LogisticareLocators.signInButton),
            Wait.for(Duration.ofSeconds(7)));
  }
   /**
   * Constructor call for the class
   */
  constructor(public username: string, public password: string) {
}
}
