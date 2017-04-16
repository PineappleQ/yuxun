import { YuxunPage } from './app.po';

describe('yuxun App', () => {
  let page: YuxunPage;

  beforeEach(() => {
    page = new YuxunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
