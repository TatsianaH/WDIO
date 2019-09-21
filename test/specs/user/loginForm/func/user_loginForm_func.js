const expect = require('chai').expect;
const loginAction = require('../../../../actions/loginAction');

const { url, user } = require('../../../../constants');


describe('User - Login Form -Func', () => {
    before(() => {
        browser.url(url.loginUrl);
    });
    it('should have correct h1', () => {
        const actualH1Text = $('//h1').getText();
        const expectedH1Text = 'User Login';

        expect(actualH1Text).to.equal(expectedH1Text);
    });
    it('should log in', () => {
        loginAction(browser);
    });

    /*it('should have correct success message', () => {
        browser.pause(2000);
        const actualMessage = $('//div[@class="notifications-br"]').getText();
        console.log('!!!!!!!'+actualMessage);
        const expectedMessage = 'Auth success';
        expect(actualMessage).to.be.equal(expectedMessage);
    });*/

    it('should redirect to user profile page', () => {
        const currentUrl = browser.getUrl();
        console.log(currentUrl);
        const profileUrl = 'https://stage.pasv.us/user/5d4f289fb3e314003833d446';
        expect(currentUrl).to.be.equal(profileUrl);

    });

    it('should have correct User name in h1', () => {
        const h1 = $('//h1').getText();
        expect(h1).to.equal(user.admin.name);
    });

});