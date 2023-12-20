const { reporters } = require('mocha')
const {join} = require ('path')

exports.config = {
    // hostname:'localhost',
    // port: 4723,
    // path:'/wd/hub',
    user:"meskarin_7BudMi",
    key:"D2vTff5o1Vqq9sQbmJFC",
    //services: ['appium'],
    services: ['browserstack'],
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework:'mocha',
    capabilities:[{
        // "platformName":"Android",
        // "platformVersion":"11.0",
        // "deviceName":"Pixel2",
        // "automationName":"UiAutomator2",
        // "app": join(process.cwd(), './app/Android/wcandroid-7.3.1.apk'),
        // "appPackage": "com.woocommerce.android",
        // "appActivity":"com.woocommerce.android.ui.main.MainActivity",
        // "appWaitActivity":"com.woocommerce.android.ui.login.LoginActivity"
        //*** Caps do BrowserStack ***/    
        "app": "bs://79205351dc6b93c7a375feb5ee6c7c1cf43899de",
        "device": "Google Pixel 4",
        "os_version": "11.0",
        "project": "First Webdriverio Android Woocommerce",
        "build": "1",
        "name": "Primeiro_teste"
    }],
    waitForTimeout:20000,
    mochaOpts:{
        timeout: 300000
    },
    reporters:['spec']
}