import {expect} from 'chai';
import {url} from '../../constants';
import {user} from '../user_constants';

const goalsTextArea = '//textarea[@name="about"]';

describe('User - Registration - `My goals` textarea - Func', () =>{
  before(() => {
    browser.url(url.register);
  });

  it('should check that the textarea is displayed', () => {
    expect($(goalsTextArea).isDisplayed()).to.be.true;

  });


});
