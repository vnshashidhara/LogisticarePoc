import { Actor, BrowseTheWeb } from "serenity-js/protractor";

import { protractor, element, browser } from "protractor";

import { serenity } from "serenity-js";
import { Text, Enter, Click, Switch, ExecuteScript } from "serenity-js/lib/serenity-protractor";
import { Duration, Is, Scroll, step, Wait, Execute} from "serenity-js/lib/screenplay-protractor";
import { Login } from "../../screenplay/tasks/Logisticarelogin.task";
import { expect } from "../../spec/expect";
import { LogisticareLocators } from "../../screenplay/locators/Logisticarelocators";
import { GetText } from "../../screenplay/abilities/getText";

export = function tmswaybill() {

    this.setDefaultTimeout(30 * 1000);

    const actor = Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser));

    const stage = serenity.callToStageFor({
        actor: name => Actor.named("admin").whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.When(/^user login with valid (.*) and (.*)$/, function (username: string, password: string) {
        console.log("HERE to lgogin");
        return stage.theActorInTheSpotlight().attemptsTo(Login.toApplication(username, password));
    });

    this.When(/^clicks on the waybill managament tab$/, function () {
        console.log("Click on way bill management tab");
        return stage.theActorInTheSpotlight().attemptsTo(Wait.for(Duration.ofSeconds(3)),
        Execute.script("document.querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').click()"));
    });

    this.When(/^clicks on the Add New Waybill button$/, function () {
        console.log("HERE to click on the Add new way bill button");
        return stage.theActorInTheSpotlight().attemptsTo(Click.on(TMSLiteLocators.addNewWaybill),
        Wait.for(Duration.ofSeconds(2)));
    });

    this.When(/^user can click on Ok button$/, function () {
        console.log("HERE to click on the OK button ");
        const txt = GetText.of().then(function (text) {
            console.log(text);
        });
        return stage.theActorInTheSpotlight().attemptsTo(
            Execute.script("document.querySelector('px-modal').shadowRoot.querySelector('#accept-trigger-button').click()"),
            Wait.for(Duration.ofSeconds(2)));
    });

    this.Then(/^user shall see be able to click HOME$/, function(){
        console.log("HERE to click on HOME BUTTON");
        return stage.theActorInTheSpotlight().attemptsTo(
            Execute.script("document.querySelector('#root span.value.LabelValue-module_truncate_2eE5L > px-dropdown').shadowRoot.querySelector('#content').shadowRoot.querySelector('#dropdown div:nth-child(3)').click()"),
            Wait.for(Duration.ofSeconds(2)));
    });

};
