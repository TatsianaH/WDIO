import { url } from '../../../constants';
import { user} from '../constants';

export default function loginAction(browser){
    browser.url(url.loginUrl);

    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const loginButton = $('//button[@class="btn btn-primary disabled"]');
   
    emailField.setValue(user.admin.email);
    passwordField.setValue(user.admin.password);

    loginButton.click();
    browser.pause(1000);
};

    
  
 