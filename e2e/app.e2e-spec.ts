import { MarmitonFrontendPage } from './app.po';

describe('marmiton-frontend App', function() {
  let page: MarmitonFrontendPage;

  beforeEach(() => {
    page = new MarmitonFrontendPage();
  });

  it('Get the menu and see what we get in', () => {
    page.navigateTo();

    expect(page.getNavBar()).toEqual('Brand');
  });
});
