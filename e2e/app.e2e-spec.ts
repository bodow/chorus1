import { Chorus1Page } from './app.po';

describe('chorus1 App', function() {
  let page: Chorus1Page;

  beforeEach(() => {
    page = new Chorus1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ch works!');
  });
});
