import { AngularSemanticPage } from './app.po';

describe('angular-semantic App', () => {
  let page: AngularSemanticPage;

  beforeEach(() => {
    page = new AngularSemanticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('semui works!');
  });
});
