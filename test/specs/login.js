const expect = require('chai').expect;
const loginAction = require('../actions/loginAction.js');

describe('Login page', ()=>{
    before(()=> {
    browser.url('https://stage.pasv.us/user/login');
    });

it('should have correct h1', ()=> {
    const selector = '//h1';
    const element = $(selector);
    const actual = element.getText();
    const expected = 'User Login';

    expect(actual).to.equal(expected);
});
    it('should log in', () => {
        loginAction(browser);
    });

    it('should have correct User name in h1', () => {
        const userName = 'Test Test';
        const h1 = $('//h1').getText();
        expect(h1).to.equal(userName);
    });
})