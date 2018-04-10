const {assert} = require('chai');


describe('/videos/create', () => {
    describe('add a new video', () => {
        it('form', () => {
            browser.url('/videos/create');
            const method = 'post';
            const action = '/videos';

            assert.equal(browser.getAttribute('form', 'method'), method);
            assert.include(browser.getAttribute('form', 'action'), action);
        });
    });
});
