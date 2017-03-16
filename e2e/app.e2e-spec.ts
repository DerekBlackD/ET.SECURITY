import { ET.ERP.SECURITYPage } from './app.po';

describe('et.erp.security App', () => {
  let page: ET.ERP.SECURITYPage;

  beforeEach(() => {
    page = new ET.ERP.SECURITYPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
