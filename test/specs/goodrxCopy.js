const expect = require('chai').expect;

const searchInputSelector = '//div[@class="search-wrap"]//input[@name="drug-name"]';
const drugName = 'Amoxicillin';
const searchDropdownFirstRes = '//div[@class="search-wrap"]//ul[@class="typeahead dropdown-menu"]/li[1]';
const drugPagePrescriptionSettingsSelector = '//div[@aria-label = "Prescription Settings"]';
const drugPageRows = '//div[@id="a11y-prices-start"]//button[contains(text(), "Get free")]/../..';

describe('Amoxicillin', () =>{
    before(() => {
        browser.url("https://www.goodrx.com/");

        browser.setCookies([
            { 'name': 'grx_internal_user', 'value': 'true'}
        ]);
        browser.refresh();
    });

    it('should open main page with correct h1', () =>{
        const h1Text = $('//h1').getText();
        const h1TextExpected = 'Stop paying too much for your prescriptions';
        expect(h1Text).to.equal(h1TextExpected);
    });

    it('should open main page with search input', () =>{
        const searchInputIsDisplayed = $(searchInputSelector).isDisplayed();
        expect(searchInputIsDisplayed).to.be.true;
    });


    it('should type drug-name into search input', () => {
        const searchInput = $(searchInputSelector);
        searchInput.setValue(drugName);
        $(searchDropdownFirstRes).click();
    });

    it('should check price page for correct drug name', () => {
        const h1Text = $('//h1/a').getText();
        expect(h1Text).to.be.equal(drugName);
        
    });
    it('should check price page for Prescription settings', () => {
        const prescriptionSettingsIsDisplayed =$(drugPagePrescriptionSettingsSelector).isDisplayed();
        expect(prescriptionSettingsIsDisplayed).to.be.true;
        
    });

    it('should check every price row', () => {
        const allRows = $$(drugPageRows);
       console.log('++++++++++' + allRows.getText());
       
        for(let i = 1; i <= allRows.length; i++){
        const rowPrice = allRows[i].$('//div[@data-qa="drug_price"]').getText().split('\n')[1];
        const rowStore = allRows[i].$('//div[@data-qa="store_name"]').getText().split('\n')[1];
        const buttonCoupon = allRows[i].$('//button[@data-qa="coupon_button"]');
            let a = allRows[1].$('//div[@data-qa="drug_price"]').getText().split('\n');
        //console.log('++++++++++' + a);
       
        }
       /* const  pageName = browser.getWindowHandle();
        let newPage = '';
        buttonCoupon.click();
        const allWindowHandles = browser.getWindowHandles();
        console.log('****************' + allWindowHandles);
        for(let i = 0; i < allWindowHandles.length; i++){
            if (allWindowHandles[i] !== pageName){
                newPage = allWindowHandles[i];
            }
        }
        browser.switchToWindow(newPage);
        const newPrice = $('//span[@class = "value pull-left"]');
        const newStoreName = $('//div[@id="clipping"]//div[@class="explanation"]/strong');
        expect(newPrice).to.be.equal(rowPrice);
        expect(newStoreName).to.be.equal(rowStore);  
        }
        //browser.debug();
*/
    });

});