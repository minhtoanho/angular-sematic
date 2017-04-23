import { browser, element, by } from 'protractor';

export class AngularSemanticPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('semui-root h1')).getText();
  }
}
