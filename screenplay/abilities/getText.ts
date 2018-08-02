

import { Interaction, UsesAbilities, Ability } from "serenity-js/lib/screenplay";
import { BrowseTheWeb, Target, ExecuteScript } from "serenity-js/lib/screenplay-protractor";
import { browser } from "protractor";

/**
 * Presence class definition for finding if an element is present
 */
export class GetText implements Ability {

  /**
   * Question Method to find out if an element is present
   * @param target
   * @returns {FindElement}
   */
  public static of(): PromiseLike<String>  {
    return browser.executeScript("return document.querySelector('px-app-nav').shadowRoot.querySelector('#items > px-app-nav-item:nth-child(5)').shadowRoot.querySelector('p').innerHTML").then(function(text){
      console.log(" jhjgjhf " + text);
      return text;
  }) as any;
}
}
