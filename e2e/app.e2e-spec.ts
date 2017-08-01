import { Angular09MapitPage } from './app.po';

describe('angular09-mapit App', () => {
  let page: Angular09MapitPage;

  beforeEach(() => {
    page = new Angular09MapitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
