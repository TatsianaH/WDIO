const expect = require('chai').expect;
const loginAction = require('../../actions/loginAction');
const selectorMenuItem = '//div[@id="site-menu"]//a[contains(text(),"Diary")]';


describe('Diary List', ()=>{
    before(()=> {
    loginAction(browser);
    });

    it('should have main menu item', ()=> {
   
    const isDisplayed = $(selectorMenuItem).isDisplayed();
    expect(isDisplayed).to.be.true;

    });

    it('should redirect to Diary list page', ()=> {
    
    $(selectorMenuItem ).click();
    const actualH1Text = $('//h1').getText();
    const expected = 'Day reports';
    expect(actualH1Text).to.equal(expected);
    });
    it('should have a few records', () => {
        const selector = '//div[@class="pb-4 mb-4 border-bottom"]';
        const element = $(selector);
        console.log(element);
        
    });
 
});