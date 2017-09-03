import { PartialViewPage } from './app.po';

describe('partial-view App', () => {
  let page: PartialViewPage;

  beforeEach(() => {
    page = new PartialViewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
