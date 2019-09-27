import {assert} from 'chai';
import {url} from '../../../../constants';
import {user} from '../../user_constants';

const loginButton = '//button[@type="submit"]'; 
const passwordField = '//input[@name="password"]';


describe('User - LoginForm - Password - Func', () => {
    before(() => {
        browser.url(url.loginUrl);
        const emailField = '//input[@name="email"]';
        $(emailField).setValue(user.admin.email);
    });

    it('should check that login button is disabled if password field is empty', () => {
        assert.isFalse($(loginButton).isEnabled());
    });

    it ('should validate error message if user enters incorrect password', () => {
        $(passwordField).setValue('11111');
        $(loginButton).click();
        browser.pause(1000);
        const failedMsg = '//div[@class="notifications-br"]/div/h4'; 
        const actualFailedMsg = $(failedMsg).getText();
        console.log('!!!!!!!!!!!!!', actualFailedMsg);
        const expectedMsg = 'Auth failed';
        assert.equal(actualFailedMsg, expectedMsg);
    });

    /*it ('should validate that copy/cut option for password is disabled', () => {
        $(passwordField).setValue(user.admin.password);
        browser.keys('Tab');
        const actualTextOfPassword = $(passwordField).getText();
        console.log('!!!!!!!!!!!!!!!', actualTextOfPassword);
        const expectEmptyTextOfPassword = '';
        assert.equal(actualTextOfPassword, expectEmptyTextOfPassword);
    });*/
    
    it ('should validate that Login button is enabled if password is correct', () => {
        $(passwordField).setValue(user.admin.password);
        assert.isTrue($(loginButton).isEnabled());
    });

    it('should validate success message if user enters correct password', () =>{
        $(passwordField).setValue(user.admin.password);
        $(loginButton).click();
        browser.pause(1000);
        const expectedSuccessMsg = 'Auth success';
        const actualSuccessMsg = $('//div[@class="notifications-br"]/div/h4').getText();
        console.log('!!!!!!!!!!!!!!!!!!!', actualSuccessMsg);
        assert.equal(actualSuccessMsg,expectedSuccessMsg);
        browser.pause(1000);
    });

    it ('should validate that user can succesfully log in with correct password', () => {
        const expectedAccountUrl = 'https://stage.pasv.us/user/5d4f289fb3e314003833d446';
        const actualUrl = browser.getUrl(); 
        assert.equal(actualUrl, expectedAccountUrl);
    });
    it('should validate that user can succesfully log in with correct password (Logout link appears)', () => {
        const UserNameLink = '//div[@id="user-section"]//a[text()="Admin Test"]';
        $(UserNameLink).click();
        const actualLogoutButton = $('//button[contains(text(),"Logout")]').getText();
        const expectedLogoutButton = 'Logout';
        assert.equal(actualLogoutButton, expectedLogoutButton);
    });
});