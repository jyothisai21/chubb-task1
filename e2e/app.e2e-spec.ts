import { ChubbProjPage } from './app.po';

describe('chubb-proj App', function() {
  let page: ChubbProjPage;

  beforeEach(() => {
    page = new ChubbProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
