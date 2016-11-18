import { TestTrackerWebPage } from './app.po';

describe('test-tracker-web App', function() {
  let page: TestTrackerWebPage;

  beforeEach(() => {
    page = new TestTrackerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
