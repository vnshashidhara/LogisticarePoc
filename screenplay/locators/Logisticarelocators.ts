import { Target } from "serenity-js/lib/screenplay-protractor";
import { by } from "protractor";
import { Locator } from "protractor/built/locators";

export class LogisticareLocators {

    static loginButton = Target.the("Login button").located(by.xpath("//*[@id='root']//button"));

    static usernameTextbox = Target.the("Username placeholder").located(
        by.xpath("//*[@id='auth0-lock-container-1']//input[@name='username']"));

    static passwordTextbox = Target.the("Password placeholder").located(
        by.xpath("//*[@id='auth0-lock-container-1']//input[@name='password']"));

    static signInButton = Target.the("Login Authentication field").located(
        by.xpath("//*[@id='auth0-lock-container-1']//button/span[@class='auth0-label-submit'] "));

    static actualText = Target.the("Actual Text placeholer in home page").located(by.xpath("//*[@id='root']//h2"));

   // static tTab= Target.the("").located(
   //   by.js("argument[0].querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').click()",null"));

    static addNe = Target.the("Login button").located(by.xpath("//*[@id='root']//button[contains(text(),'Add New Waybill')]"));

    static loadMore = Target.the("").located(by.xpath("//*[@id='root']/div/div/section/section/section/div/div/button"));
 }


