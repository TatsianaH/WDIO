const { url, user } = require('../constants');

module.exports = () => {
    browser.url(url.registerUrl);

    const name = $('//input[@name="name"]');
    const phone = $('//input[@name="phone"]');
    const email = $('//input[@name="email"]');
    const password = $('//input[@name="password"]');
    const about = $('//textarea[@name="about"]');
    const goals = $('//textarea[@name="goals"]');
    const englishLevel = '//label[@for="englishLevel"]/../../select';
    
    name.setValue(user.admin.name);
    phone.setValue(user.admin.phone);
    email.setValue(user.emailForRegister);
    password.setValue(user.admin.password);
    about.setValue(user.admin.about);
    myGoals.setValue(user.admin.goals);

    $(englishLevel).click();
    const values = $(englishLevel).getText().split('\n');
    let index = 0;
    let option = '';
    for (let i = 0; i < values.length; i++) {
        index = Math.round(Math.random() * i);
    }
    option = $(englishLevel).selectByIndex(index);
    browser.keys('Tab');

    const submitButton = $('//div//button[contains(text(), "Submit")]');
    submitButton.click();
    browser.pause(1000);
}
 /* //$(sel.englLevel).selectByIndex(2);         
nglLevel).selectByVisibleText("Advanced"); */