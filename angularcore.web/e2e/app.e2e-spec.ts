import { AngularcoreCPage } from './app.po';

describe('angularcore-c App', () => {
  let page: AngularcoreCPage;

  beforeEach(() => {
    page = new AngularcoreCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
