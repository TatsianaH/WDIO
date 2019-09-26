const expect = require('chai').expect;
const { url, user } = require('../../../../constants');

describe('Registration', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should fill all fields on Register Page', () => {
        let name = $('//input[@name="name"]');
        name.setValue(user.admin.name);

        let phone = $('//input[@name="phone"]');
        phone.setValue(user.admin.phone);

        let email = $('//input[@name="email"]');
        email.setValue(user.emailForRegister);

        let password = $('//input[@name="password"]');
        password.setValue(user.admin.password);

        let about = $('//textarea[@name="about"]');
        about.setValue(user.admin.about);

        let myGoals = $('//textarea[@name="goals"]');
        myGoals.setValue(user.admin.goals);

       let englishLevel = '//label[@for="englishLevel"]/../../select';
        $(englishLevel).click();
        const values = $(englishLevel).getText().split('\n');
       // console.log('VALUES!!!!!' + values);
        let index = 0;
        let option = '';
        for (let i = 0; i < values.length; i++) {
            index = Math.round(Math.random() * i);
        }
        option = $(englishLevel).selectByIndex(index);
        browser.keys('Tab');
    });

    it('should press susmit bitton', () => {
        const submitButton = $('//button[@type="Submit"]');
        submitButton.click();
        browser.pause(1000);
    });
    
    /*it('should contain success message', () => {
        let actualMessage = $('//h4[@class="notification-title"]').getText();
        console.log(actualMessage);
        let expectedMessage = 'User created successfully. Please check your email and verify it';
        expect(actualMessage).to.equal(expectedMessage);
    
    
    });*/

    it('should redirect to Login page', () => {
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.be.equal(url.loginUrl);
    });
});