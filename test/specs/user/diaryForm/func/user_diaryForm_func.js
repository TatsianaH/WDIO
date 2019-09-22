const expect = require('chai').expect;
const loginAction = require('../../../../actions/loginAction');
const { url, user} = require('../../../../constants');

describe('', () =>{
    before(() => {
        browser.url(url.loginUrl);
    });

    it('should log in', () => {
        loginAction(browser);
    });

    it('should redirect to Diary page', () =>{
        const diaryLink = '//div[@id="site-menu"]/ul/li/a[contains(text(),"Diary")]';
        $(diaryLink).click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.be.equal(url.diaryUrl);
    });

    it('should redirect to Create a day report page', () =>{
        const diaryReport = '//a[(text()="Create day report")]';
        $(diaryReport).click();
        const actualDiaryReportUrl = browser.getUrl(); 
        expect(actualDiaryReportUrl).to.be.equal(url.diaryReportUrl)
       
    });
    it('should create a day report and mark the label', () =>{
        const markLabel = '//input[@id="input-[1]"]';
        $(markLabel).click();

        const diaryDesc = '//textarea[@name="description"]';
        $(diaryDesc).addValue('Watched lessons, solved tasks, wrote tests.');
        const buttonSave = '//button[@class="btn btn-primary"]';
        $(buttonSave).click();
    });

    // the next test are not checked
    it('should check that the day report was created on Day reports page', () => {
        const actualReport = $('//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::div[2]').getText();
        
        const expectedReport = 'Watched lessons, solved tasks, wrote tests.';
        expect(actualReport).to.be.equal(expectedReport);
    });
});