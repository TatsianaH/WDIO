const expect = require('chai').expect;
const {url} = require('./../../../../constants');



describe('User - Login Form - Design', () => {
    before(() => {
        browser.url(url.loginUrl);
    });

    it('should validate h1 is displayed', () => {
        const element = $('//h1');
        const isDisplayed = element.isDisplayed();
        expect(isDisplayed).to.be.true;

    });

    it('should validate h1 has a correct color', () => {
        const element = $('//h1');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        console.log('!!!!!!!' + actualColor);
        const expectedColor = '#333333';
        expect(actualColor).to.be.equal(expectedColor);

    });
    it('should have correct color for email field', () => {
        const element = $('//input[@name="email"]');
        const actualborderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        console.log(actualborderColor);
        const expectedBorderColor = '#ced4da';
        expect(actualborderColor).to.be.equal(expectedBorderColor);
    });
    it('shouldhave correct color for correct email field', () => {
        const element = $('//input[@name="email"]');
        element.setValue('qwe@qwe.qwe');
        browser.keys('Tab');
        browser.pause(300);
        const actualborderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        console.log(actualborderColor);
        
        const expectedBorderColor = '#24c88b';
        expect(actualborderColor).to.be.equal(expectedBorderColor);
    });

    it('shouldhave correct color for incorrect email field', () => {
        const element = $('//input[@name="email"]');
        element.setValue('qwe@qwe.q');
        browser.keys('Tab');
        browser.pause(300);
        const actualborderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        console.log(actualborderColor);
        
        const expectedBorderColor = '#ff4465';
        expect(actualborderColor).to.be.equal(expectedBorderColor);
    });


});