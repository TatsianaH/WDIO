const expect = require('chai').expect;
//const assert = require('assert');

describe('Main page', () => {
    before(() => {
    browser.url('https://stage.pasv.us/');

    });


    it('should have correct site name', () => {
       
        const selector = $("//span[@id='site-name']");
        const actual = selector.getText();
        const expected = 'Progress Monitor';
      console.log(actual);
        expect(actual).to.be.equal(expected);
        //assert.equal(text, 'Progress Monitor');
    });
    it('should have current year in the footer', () => {
        const element = $("//small[@class='d-block mb-3 text-muted']");
        const currentYear = '2019';
        
        const actual = element.getText();
        expect(actual).to.include(currentYear);
    });

    it('title should have correct color value', () => {
       
        const selector = $("//span[@id='site-name']");
        const actualColor = selector.getCSSProperty('color').parsed.hex;
        const expected = '#000000';
        expect(actualColor).to.be.equal(expected);

    });
});
