import { AngularPostersPage } from './app.po';

describe('angular-posters App', function() {
  let page: AngularPostersPage;

  beforeEach(() => {
    page = new AngularPostersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
