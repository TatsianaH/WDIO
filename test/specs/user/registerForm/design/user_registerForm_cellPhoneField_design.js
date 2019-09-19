const expect = require('chai').expect;
const { baseUrl } = require('../../../../constants');
const inputFieldPhone = '//input[@name="phone"]';

describe('Cell Phone Number input field', () => {
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
/*
//Validation: properties change all the time.
describe('Cell Phone Number input field when the number is validated', () => {
    before(() => {
        browser.url(baseUrl);
        const registerButton = '//a[@class="btn btn-outline-primary"]';
        $(registerButton).click();
        const input = $(inputFieldPhone).setValue('+17008009000');
        const inputFieldEmail = '//input[@name="email"]';
        $(inputFieldEmail).click();
    });
   it('should verify border-color of "Cell phone number" input field when the number is validated.', () => {

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
    });

});

describe('Cell phone number Label', () => {
    before(() => {
        browser.url(baseUrl);
        const registerButton = '//a[@class="btn btn-outline-primary"]';
        $(registerButton).click();
    });

    it('should verify that label “Cell phone number”  is displayed.', () => {
        const actualLabel = $('//label[@for="phone"]').isDisplayed();
        expect(actualLabel).to.be.true;
    });
    it('should verify label "Cell phone number" font-family.', () => {
        const actualLabelObj = $('//label[@for="phone"]').getCSSProperty('font-family');
        const valuesfontFamilyObj = Object.values(actualLabelObj)[2];
        const actualLabelfontFamily = Object.values(valuesfontFamilyObj).join();
        console.log('!!!!!!!!' + actualLabelfontFamily);
        const expectedLabelfontFamily = 'sf pro display,sf pro icons,helvetica neue,helvetica,arial,sans-serif,font,"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif';
        expect(actualLabelfontFamily).to.be.equal(expectedLabelfontFamily);
    });
    it('should verify label "Cell phone number" font-size', () => {
        const labelSizeObj = $('//label[@for="phone"]').getCSSProperty('font-size').value;
        console.log('!!!!!!!!!' + labelSizeObj);
        const expectedLabelSize = '17px';
        expect(labelSizeObj).to.be.equal(expectedLabelSize);
    });

    it('should verify label "Cell phone number" font-color', () => {
        const actualLabelColor = $('//label[@for="phone"]').getCSSProperty('color').parsed.hex;
        console.log(actualLabelColor);
        const expectLabelColor = '#212529';
        expect(actualLabelColor).to.be.equal(expectLabelColor);
    });
    it('should verify label "Cell phone number" font-weight', () => {
        const actualLabelWeight = $('//label[@for="phone"]').getCSSProperty('font-weight').value;
        console.log('!!!!!!'+actualLabelWeight);
        const expectLabelWeight = 400;
        expect(actualLabelWeight).to.be.equal(expectLabelWeight);
    });

    it('should verify label "Cell phone number" text-align', () => {
        const actualLabelAlign = $('//label[@for="phone"]').getCSSProperty('text-align').value;
        console.log('!!!!!!'+ actualLabelAlign);
        const expectLabelAlign = 'left';
        expect(actualLabelAlign).to.be.equal(expectLabelAlign);
    });

});*/

describe('Cell phone number description text', () => {
    before(() => {
        browser.url(baseUrl);
        const registerButton = '//a[@class="btn btn-outline-primary"]';
        $(registerButton).click();
    });

    it('should verify that label “Cell phone number”  is displayed.', () => {
        const actualDescText = $('//input[@name="phone"]/following-sibling::small').isDisplayed();
        expect(actualDescText).to.be.true;
    });

    it('should verify that description text is “Format +17770005511 or +380653332244”', () => {
        const actualDescText = $('//input[@name="phone"]/following-sibling::small').getText();
        console.log('!!!!!!!!' + actualDescText);
        const expectedDescText = 'Format +17770005511 or +380653332244';
        expect(actualDescText).to.be.equal(expectedDescText);
    });

    it('should verify description text font-family', () => {
        const actualDescTextFontFamily = $('//input[@name="phone"]/following-sibling::small').getCSSProperty('font-family').parsed.value.join();
        console.log('!!!!!!!!' + actualDescTextFontFamily);
        const expectedDescTextFontFamily = 'sf pro display,sf pro icons,helvetica neue,helvetica,arial,sans-serif';
        expect(actualDescTextFontFamily).to.be.equal(expectedDescTextFontFamily);
    });

    it('should verify description text font-size', () => {
        const actualDescTextSize = $('//input[@name="phone"]/following-sibling::small').getCSSProperty('font-size').value;
        console.log('!!!!!!!!' + actualDescTextSize);
        const expectedDescTextSize = '13.6px';
        expect(actualDescTextSize).to.be.equal(expectedDescTextSize);
    });

    it('should verify description text font-color', () => {
        const actualDescTextColor = $('//input[@name="phone"]/following-sibling::small').getCSSProperty('color').parsed.hex;
        console.log('!!!!!!!!' + actualDescTextColor);
        const expectedDescTextColor = '#6c757d';
        expect(actualDescTextColor).to.be.equal(expectedDescTextColor);
    });
    it('should verify description text font-weight', () => {
        const actualDescTextWeight = $('//input[@name="phone"]/following-sibling::small').getCSSProperty('font-weight').value;
        console.log('!!!!!!!!' + actualDescTextWeight);
        const expectedDescTextWeight = 400;
        expect(actualDescTextWeight).to.be.equal(expectedDescTextWeight);
    });
    it('should verify description text text-align', () => {
        const actualDescTextAlign = $('//input[@name="phone"]/following-sibling::small').getCSSProperty('text-align').value;
        console.log('!!!!!!!!' + actualDescTextAlign);
        const expectedDescTextAlign = 'left';
        expect(actualDescTextAlign).to.be.equal(expectedDescTextAlign);
    });

    
});