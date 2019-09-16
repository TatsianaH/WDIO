module.exports = () => {
    browser.url('https://stage.pasv.us/user/login');
    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const loginButton = $('//button[@class="btn btn-primary disabled"]');
    const EMAIL = 'test2@test.test';
    const PASSWORD = '123';
    emailField.setValue(EMAIL);
    passwordField.setValue(PASSWORD);

    loginButton.click();
    browser.pause(1000);
}
 