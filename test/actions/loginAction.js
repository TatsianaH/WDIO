const {url, user} = require('../constants')
module.exports = () => {
    browser.url(url.loginUrl);
    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const loginButton = $('//button[@class="btn btn-primary disabled"]');
    const EMAIL = user.admin.email;
    const PASSWORD = user.admin.password;
    emailField.setValue(EMAIL);
    passwordField.setValue(PASSWORD);

    loginButton.click();
    browser.pause(2000);
}
 