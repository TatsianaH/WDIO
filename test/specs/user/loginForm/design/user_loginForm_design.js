const expect = require('chai').expect;
const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/login`;

describe('User - Login Form - Design', () =>{
    before(() => {
        browser.url(url);
    });

    it('should validate h1 is displayed', () =>{
        const element = $('//h1');
        const isDisplayed = element.isDisplayed();
        expect(isDisplayed).to.be.true;
   
    });

    it('should validate h1 has a correct color', () =>{
        const element = $('//h1');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        console.log('!!!!!!!' + actualColor);
        const expectedColor = '#333333';
        expect(actualColor).to.be.equal(expectedColor);
   
    });
});