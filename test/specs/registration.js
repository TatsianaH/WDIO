const expect = require('chai').expect;

describe('Registration', () => {

    browser.url('https://stage.pasv.us');

    it('should redirect to Register page', () => {
        const registerButton = $('//a[@class="btn btn-outline-primary"]');
        registerButton.click();

    });

    it('should fill all fields on Register Page', () => {
        let name = $('//input[@name="name"]');
        name.addValue('Joe Joe');

        let phone = $('//input[@name="phone"]');
        phone.addValue('+17008009000');

        let email = $('//input[@name="email"]');
        let value = "admin" + new Date().getTime() + "@test.test";
        email.addValue(value);

        let password = $('//input[@name="password"]');
        password.addValue('12345a');

        let about = $('//textarea[@placeholder="I\'m ..."]');
        about.addValue('I, m a nice person.');

        let myGoals = $('//textarea[@placeholder="1... 2... 3..."]');
        myGoals.addValue('I\'d like to be a good QA engineer.');

        let englishLevel = $('//label[@for="englishLevel"]/../../select');
        englishLevel.click();
        let option = '';
        for (let i = 1; i <= englishLevel.length; i++) {
            let index = Math.round(Math.random() * i);
            option = englishLevel.selectByIndex(index).click();

        }


    });

    it('should have drop-down menu', () => {
        let englishLevel = '//label[@for="englishLevel"]/../../select/option';
        const options = $$(englishLevel).map(option => option.getText());
        const expectedList = ['Zero', 'Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient', 'Native'];
    expect(options).to.have.ordered.members(expectedList);
    expect(options).to.deep.equal(expectedList);
    });

    it('should press susmit bitton', () => {
        const submitButton = $('//button[contains(@class,"btn btn-primary disabled")]');
        submitButton.click();

    });

    /* it('should redirect to Login page', () => {
     const actualURL = 'https://stage.pasv.us/user/login';
     const expectedURL = browser.getUrl();
     expect(actualUR).to.be.equal(expectedURL);
 
     const selector = '//h1';
     const element = $(selector);
     const actual = element.getText();
     const expected = 'User Login';
 
     expect(actual).to.equal(expected);
    
     });
 
   
      it('should contain success message', () => {
         let actualMessage = $('//h4[@class="notification-title"]').getText();
         let expectedMessage = 'User created successfully. Please check your email and verify it';
         expect(actualMessage).to.equal(expectedMessage);
        
    
     });
 
     it('should demonstrate the click command', () => {
         let input = $('//a[@class="btn btn-outline-primary"]');
         selector.click();
    
     });*/

});