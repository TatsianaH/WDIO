const expect = require('chai').expect;
import { url } from '../../../../constants';
//const registerAction = require('../../../../actions/registerAction')
//const axios = require('axios');
import userDeleteByEmail from '../../actions/deleteByEmail';

describe('User - Register Form - Func - Form is displayed', () => {
    before(() => {
        browser.url(url.baseUrl);

    });

    it('should validate Register button is displayed on the top', () => {
        const registerButton = '//div[@id="user-section"]/ul/li/a[text()="Register"]';
        const actual = $(registerButton).isDisplayed();
        expect(actual).to.be.true;

    });
    it('should check Register button is displayed and works', () => {
        const registerButton = '//div[@id="user-section"]/ul/li/a[text()="Register"]';
        const actual = $(registerButton).isDisplayed();
        expect(actual).to.be.true;
        $(registerButton).click();

    });
    it('should check Register button is displayed and works', () => {
        const registerButton = '//div[@id="user-section"]/ul/li/a[text()="Register"]';
        $(registerButton).click();
        const actualh1Text = $('//h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualh1Text).to.be.equal(expectedH1Text);

    });
    it('should have correct url', () => {
        const currentUrl = browser.getUrl();
        expect(currentUrl).to.be.equal(url.registerUrl);
    });
});

describe('User - Register Form - Func - Register new user', () => {
    before(() => {
        userDeleteByEmail(user.student.email);
       
    });

    it('shoud validate Submit button is disabled', () =>{
        const submitButton = $('//button[@type="submit"]');
        expect(submitButton.isEnabled()).to.be.false;
    });
    it('should have Real name field', () => {
        const actualRealname = $('//input[@name="name"]');
        expect(actualRealname.isDisplayed()).to.be.true;
    });
    it('should have Cell Phone Number field', () => {
        const actualphone = $('//input[@name="phone"]');
        expect(actualphone.isDisplayed()).to.be.true;
    });
    it('should have email field', () => {
        const actualemail = $('//input[@name="email"]');
        expect(actualemail.isDisplayed()).to.be.true;
    });
    it('should have password field', () => {
        const actualpassword = $('//input[@name="password"]');
        expect(actualpassword.isDisplayed()).to.be.true;
    });
    it('should have About text-area', () => {
        const actualAbout = $('//textarea[@name="about"]');
        expect(actualAbout.isDisplayed()).to.be.true;
    });
    it('should have Goals text-area', () => {
        const actualGoals = $('//textarea[@name="goals"]');
        expect(actualGoals.isDisplayed()).to.be.true;
    });
    it('should have English level text-area', () => {
        const actualEnglishLevel = $('//label[@for="englishLevel"]/../../select');
        expect(actualEnglishLevel.isDisplayed()).to.be.true;
    });
    it('should have drop-down menu', () => {
        let englishLevel = '//label[@for="englishLevel"]/../../select/option';
        const options = $$(englishLevel).map(option => option.getText());
        const expectedList = ['Zero', 'Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient', 'Native'];
        expect(options).to.have.ordered.members(expectedList);
        expect(options).to.deep.equal(expectedList);
    });

});

describe('', () => {

    before(() => {
        registerAction(browser);
    });

   /* it('shoud validate Submit button is enabled', () =>{
        const submitButton = $('//button[@type="submit"]');
        expect(submitButton.isEnabled()).to.be.true;
    });*/
});
