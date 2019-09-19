const expect = require('chai').expect;
const { baseUrl } = require('../../../../../test/constants');
const inputFieldPhone = '//input[@name="phone"]';

describe('', () => {
    before(() => {
        browser.url(baseUrl);
        const registerButton = '//a[@class="btn btn-outline-primary"]';
        $(registerButton).click();
    });

    it('should verify that “Cell phone number” input field is displayed', () => {
        const actualInputFieldPhone = $(inputFieldPhone).isDisplayed();
        expect(actualInputFieldPhone).to.be.true;
    });

    it('should verify border-color of "Cell phone number" input field ', () => {
        const actualBorder = $(inputFieldPhone).getCSSProperty('border-top-color').parsed.hex;
        console.log('!!!!!!!!' + actualBorder);
        const expectedBorder = '#ced4da';
        expect(actualBorder).to.be.equal(expectedBorder);
    });

    it('should verify font-color of "Cell phone number" input field when user enters first symbol', () => {
        const input = $(inputFieldPhone).setValue('+');
        const actualFontColor = $(inputFieldPhone).getCSSProperty('color').parsed.hex;
        console.log('!!!!!!!!' + actualFontColor);
        const expectedFontColor = '#495057';
        expect(actualFontColor).to.be.equal(expectedFontColor);
    });
    it('should verify focus border-color of "Cell phone number" input field', () => {
        const actualFocusBorderColor = $(inputFieldPhone).getCSSProperty('border-color').parsed.hex;
        console.log('!!!!!!!!' + actualFocusBorderColor);
        const expectedFocusBorderColor = '#4d94ff';
        expect(actualFocusBorderColor).to.be.equal(expectedFocusBorderColor);
    });
    it('should verify focus highlight color of "Cell phone number', () => {
        const actualFocusHighlightColor = $(inputFieldPhone).getCSSProperty('box-shadow').parsed.hex;
        console.log('!!!!!!!!' + actualFocusHighlightColor);
        const expectedFocusHighlightColor = '#0052cc';
        expect(actualFocusHighlightColor).to.be.equal(expectedFocusHighlightColor);
    });
    it('should verify background-color of "Cell phone number" input field when user enters first symbol', () => {
        const actualBackgroundColor = $(inputFieldPhone).getCSSProperty('background-color').parsed.hex;
        console.log('!!!!!!!!' + actualBackgroundColor);
        const expectedBackgroundColor = '#ffffff';
        expect(actualBackgroundColor).to.be.equal(expectedBackgroundColor);
    });

    it('should verify text-align of "Cell phone number" input field when user enters first symbol', () => {
        const textAlignObj = $(inputFieldPhone).getCSSProperty('text-align');
        const valuesActualTextAlign = Object.values(textAlignObj);
        const actualTextAlign = valuesActualTextAlign[1];
        console.log('!!!!!!!!' + valuesActualTextAlign[1]);
        const expectedTextAlign = 'start';
        expect(actualTextAlign).to.be.equal(expectedTextAlign);
    });

    it('should verify font-family of "Cell phone number" input field when user enters first symbol.', () => {
        const fontFamilyObj = $(inputFieldPhone).getCSSProperty('font-family');
        const valuesfontFamilyObj = Object.values(fontFamilyObj)[2];
        const actualfontFamily = Object.values(valuesfontFamilyObj).join();
        console.log('!!!!!!!!' + actualfontFamily);
        const expectedfontFamily = 'sf pro display,sf pro icons,helvetica neue,helvetica,arial,sans-serif,font,"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif';
        expect(actualfontFamily).to.be.equal(expectedfontFamily);
    });
    it('should verify font-weight of "Cell phone number" input field when user enters first symbol.', () => {
        const actualWeightObj = $(inputFieldPhone).getCSSProperty('font-weight');
        const actualWeight = Object.values(actualWeightObj)[1];
        console.log('!!!!!!!!' + actualWeight);
        const expectedweight = 400;
        expect(actualWeight).to.be.equal(expectedweight);
    });



});
describe('', () => {
    before(() => {
        browser.url(baseUrl);
        const registerButton = '//a[@class="btn btn-outline-primary"]';
        $(registerButton).click();
        const input = $(inputFieldPhone).setValue('+17008009000');
        const inputFieldEmail = '//input[@name="email"]';
        $(inputFieldEmail).click();
    });
   /* it('should verify border-color of "Cell phone number" input field when the number is validated.', () => {

        const actualBorderColorValid = $(inputFieldPhone).getCSSProperty('border-color').parsed.hex;
        console.log('!!!!!!!!' + actualBorderColorValid);
        const expectedBorderColorValid = '#24c88b';
        expect(actualBorderColorValid).to.be.equal(expectedBorderColorValid);
    });

    it('should verify focus highlight color of "Cell phone number" input field when the number is validated', () => {
        const actualFocusHighlightColorValid = $(inputFieldPhone).getCSSProperty('box-shadow').parsed.hex;
        console.log('!!!!!!!!' + actualFocusHighlightColorValid);
        const expectedFocusHighlightColorValid = '#24c88b';
        expect(actualFocusHighlightColorValid).to.be.equal(expectedFocusHighlightColorValid);
    });*/

});