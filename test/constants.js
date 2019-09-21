const baseUrl = 'https://stage.pasv.us';
const url = {
    loginUrl:`${baseUrl}/user/login`,
    registerUrl: `${baseUrl}/user/register`,
    diaryUrl: `${baseUrl}/diary`,
    serverUrl:'https://server-stage.pasv.us',
    diaryReportUrl: `${baseUrl}/diary/create`
    
};
const user = {
    emailForRegister: 'test' + new Date().getTime() + '@test.test',
    admin: {
        email: 'test2@test.test',
        password: '12345a', 
        id: '5d4f289fb3e314003833d446',
        name: 'Admin Test',
        phone:'+17008009000',
        about:'I am a nice person.',
        goals: 'I want to be a good QA engineer.'
    },
    student: {
        email: 'student1568927046124@test.test',
        password: '12345a',
        name: 'New New',
        phone:'+17008009000',
        about:'I am a nice person.',
        goals: 'I want to be a good QA engineer.'
    }
};

module.exports = {
    baseUrl,
    url,
    user
};

