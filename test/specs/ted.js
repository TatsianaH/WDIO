const expect = require('chai').expect;

describe('', () =>{
before (()=> {
    browser.url('https://www.google.com/');
});
    it('should open google and type TED in search bar', () =>{
        const input = $('//input[@title="Search"]');
        input.setValue('TED');
        browser.keys('Enter');
        //browser.debug();

    });
    it('should check first title ', () =>{
        const firstResultTitle = $('//div[@id="res"]//h3').getText();
        const expectedIncludesTitle = 'TED';

        expect(firstResultTitle).to.include(expectedIncludesTitle);
        
    });
});