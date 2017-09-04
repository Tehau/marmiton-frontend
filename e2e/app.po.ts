import { browser, element, by } from 'protractor';

export class MarmitonFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavBar() { //a class="navbar-brand"
    return element(by.css('a navbar-brand')).getText;
  }
}
