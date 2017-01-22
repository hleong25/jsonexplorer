import { JsonexplorerPage } from './app.po';

describe('jsonexplorer App', function() {
  let page: JsonexplorerPage;

  beforeEach(() => {
    page = new JsonexplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
