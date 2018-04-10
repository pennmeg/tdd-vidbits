const {assert} = require('chai'); // chai import
describe('visits landing page', () => {
  describe('no existing videos', () => {
    it('shows no videos', () => {
      browser.url('/');
      assert.equal(browser.getText('#videos-container'), '');
    });
    it('navigate to /videos/create', () => {
      browser.url('/');
      browser.click('.add-video');
      assert.include(browser.getText('body'), 'Save a video');
    });
  });
});
