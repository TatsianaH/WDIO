const expect = require('chai').expect;
const loginAction = require('../../../../actions/loginAction');
const { url, user } = require('../../../../constants');

const textDayReport = 'Watched lessons, solved tasks, wrote tests.';
let markLabelText = '';
const actualReport = '//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::div[2]';

describe('', () => {
    before(() => {
        loginAction(browser);
    });
    
    it('should redirect to Diary page', () => {
        const diaryLink = '//div[@id="site-menu"]/ul/li/a[contains(text(),"Diary")]';
        $(diaryLink).click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.be.equal(url.diaryUrl);
    });

    it('should redirect to Create a day report page', () => {
        const diaryReport = '//a[(text()="Create day report")]';
        $(diaryReport).click();
        const actualDiaryReportUrl = browser.getUrl();
        expect(actualDiaryReportUrl).to.be.equal(url.diaryReportUrl)

    });
    it('should create a day report and mark the label', () => {
        const markLabel = '//input[@id="input-[1]"]';
        $(markLabel).click();
        markLabelText = $('//input[@id="input-[1]"]/../label[@for="input-[1]"]/div').getText();
        const diaryDesc = '//textarea[@name="description"]';
        $(diaryDesc).addValue(textDayReport);
        const buttonSave = '//button[@class="btn btn-primary"]';
        $(buttonSave).click();
    });

    it('should check that the day report was created on Day reports page', () => {
        const actual = $(actualReport).getText();
        expect(actual).to.be.equal(textDayReport);
    });
    it('should check that creating diary has succesfull message', () => {
        const actualMessage = $('//div[@class="notifications-br"]/div/h4[@class="notification-title"]').getText();
        const expectedMessage = 'Diary created';
        expect(actualMessage).to.be.equal(expectedMessage);
        const crossSign = $('//span[@class="notification-dismiss"]').click();
    });

    it('should check that label mark text is correct', () => {
        const actualMarkLabelText = $('//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::div//span[@class="mr-1 badge badge-success"]').getText();
        expect(actualMarkLabelText).to.be.equal(markLabelText);
    });

    it('should check that Approve has succesfull message', () => {
        const buttonApprove = $('//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::span//button[@class="btn btn-outline-success"]').click();
        const actualMessage = $('//div[@class="notifications-br"]/div/h4[contains(text(), "Diary approved. Updated Achievement. Success")]').getText();
        const expectedMessage = 'Diary approved. Updated Achievement. Success';
        expect(actualMessage).to.be.equal(expectedMessage);
        const crossSign = $('//span[@class="notification-dismiss"]').click();
    });

   it('should check that Like has succesfull message', () => {
        const buttonLike = $('//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::span//button[@class="btn btn-outline-primary btn-sm"]').click();
        const actualMessage = $('//div[@class="notification notification-success notification-visible"]/h4').getText();
        console.log('!!!!!!!!!!!!!!', actualMessage)
        const expectedMessage = 'Diary Like. Success';
        expect(actualMessage).to.be.equal(expectedMessage);
        const crossSign = $('//span[@class="notification-dismiss"]').click();
    });
    it('should check Edit link is clickable', () => {
        const editLink = '//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::a[@class="btn btn-link"]';

    });
    it('should check that after click on Delete button message appears', () => {
        const deleteButton = '//div//div[@class="container"]//span/a[text()="Admin Test"]/../following-sibling::div[@role="group"]/button';
        $(deleteButton).click();
        const actualDeleteMessage = $('//div[@class="notification notification-success notification-visible"]/h4').getText();
        console.log('!!!!!!!!!!!!!!!!!', actualDeleteMessage)
        const expectedDeleteMessage = 'Diary deleted';
        expect(actualDeleteMessage).to.be.equal(expectedDeleteMessage);
        browser.refresh();
        browser.pause(1000);
    });
it('should check that day report is not displayed', () => {
    const reportDeleted = $(actualReport).isDisplayed();
    console.log('!!!!!!!!!!!', reportDeleted);
    expect(reportDeleted).to.be.false;

});
});


