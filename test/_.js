const expect = require('chai').expect;
const loginAction = require('./loginAction');

describe('Login page', ()=>{
    before(()=> {
    loginAction(browser);
    });

it('should have correct h1', ()=> {
    const selector = '//h1';
    const element = $(selector);
    const actual = element.getText();
    const expected = 'User Login';

    expect(actual).to.equal(expected);
});
    
})