const expect = require('chai').expect;

const searchInputSelector = '//div[@class="search-wrap"]//input[@name="drug-name"]';
const drugName = 'Amoxicillin';
const searchDropdownFirstRes = '//div[@class="search-wrap"]//ul[@class="typeahead dropdown-menu"]/li[1]';
const drugPagePrescriptionSettingsSelector = '//div[@aria-label = "Prescription Settings"]';
const drugPageRows = '//div[@id="a11y-prices-start"]//button[contains(text(), "Get free")]/../..';

describe('Amoxicillin', () => {
    before(() => {
        browser.url("https://www.goodrx.com/");

        browser.setCookies([
            { 'name': 'grx_internal_user', 'value': 'true' }
        ]);
        browser.refresh();
    });

    it('should open main page with correct h1', () => {
        const h1Text = $('//h1').getText();
        const h1TextExpected = 'Stop paying too much for your prescriptions';
        expect(h1Text).to.equal(h1TextExpected);
    });

    it('should open main page with search input', () => {
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
        const prescriptionSettingsIsDisplayed = $(drugPagePrescriptionSettingsSelector).isDisplayed();
        expect(prescriptionSettingsIsDisplayed).to.be.true;

    });



    it('should check every price row', () => {
        const allRows = $$(drugPageRows);
        const currentWindowId = browser.getWindowHandles()[0];

        let rowPrice, buttonCoupon;
        allRows.forEach(row => {
            rowPrice = row.$('//div[@data-qa="drug_price"]').getText().split('\n')[1].substring(1);
            buttonCoupon = row.$('//button[@data-qa="coupon_button"]');
            buttonCoupon.click();

            const modalHeyDoctor = $('//div[@id="modal-heyDoctorModal"]//button[@aria-label = "click to close modal"]');
            if (modalHeyDoctor.isDisplayed()) {
                modalHeyDoctor.click();
            }

            const handles = browser.getWindowHandles();
            const newTabId = handles.filter(el => el !== currentWindowId)[0];

            console.log('HANDLES', handles);

            if (newTabId) {
                browser.switchToWindow(newTabId);
                const price = $('//div[@class="price-info"]//span').getText();
                console.log('Price', price);
                expect(price).to.be.equal(rowPrice);
                browser.closeWindow();
                browser.switchToWindow(currentWindowId);
                const modalPostCoupon = $('//div[@id="modal-PostCoupon"]//span[@role = "button"]');
                if (modalPostCoupon.isDisplayed() && !modalPostCoupon.error) {
                    modalPostCoupon.click();
                }

            }
            console.log(rowPrice);
        });


    });

});