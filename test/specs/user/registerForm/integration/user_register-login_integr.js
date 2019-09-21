const expect = require('chai').expect;
const registerAction = require('../../../../actions/registerAction');
const {url, user} = require('../../../../constants');
const axios = require('axios');
let TOKEN;

describe('User - Register and Login - Integration', () => {
    before(() => {
        //delete user
        console.log('!!!!!!!!!!!!!!!');
        return axios.post(`${url.serverUrl}/user/login`, {
            email: user.admin.email,
            password: user.admin.password, 
          })
          .then(function (response) {
           TOKEN = response.data.token;
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log('!!!!!!!!!!!!!!!');
    });

     it('should ', () => {
        console.log('TOKEN', TOKEN);
        expect(TOKEN).not.to.be.undefined;
    });
    /*it('should register new user', () => {
        registerAction(browser);
        browser.pause(1000);
    });*/
});