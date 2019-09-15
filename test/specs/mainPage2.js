const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Progress Monitor');
    });
    it('should demonstrate the click command', () => {
        const myButton = $("//a[@class='btn btn-outline-primary']");
        myButton.click();
   ; 
    });
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/');
        const myButton = $("//a[@class='nav-link']");
        myButton.click();
        
    });
    it('should demonstrate the addValue command', () => {
        let input = $("//input[@name='email']");
        input.addValue('test2@test.test');
        let input2 = $("//input[@name='password'] ");
        input.addValue("12345");
    
        
    });
    it('should have the right title', () => {
        const myButton = $("//button[@class='btn btn-primary disabled']  ");
    myButton.click();
    });
});



