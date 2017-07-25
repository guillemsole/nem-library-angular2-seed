import { Angular4SeedPage } from './app.po';

describe('angular4-seed App', () => {
  let page: Angular4SeedPage;

  beforeEach(() => {
    page = new Angular4SeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
