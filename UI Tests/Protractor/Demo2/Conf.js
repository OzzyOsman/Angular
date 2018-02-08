// An example configuration file.
var reporter = require('protractor-multicapabilities-htmlreporter_v2');

var dataPath = './Protractor/Demo2/TestData/ptor-out.json';
var reportPath = "./Protractor/Reports";

var reportTitle = "UI Tests - Chrome and IE combined";
var reportFileName = reportPath + '/Demo2 UI Report.html';

exports.config = {
    onPrepare: function () {
        //setup browser size
        browser.driver.manage().window().setSize(1400, 900);
    },

    resultJsonOutputFile: dataPath,

    afterLaunch: function() {
        reporter.generateHtmlReport(dataPath, reportTitle, reportFileName);
    },

    seleniumAddress: "http://localhost:4444/wd/hub",
    //directConnect: true,
    
    //specs: [
        //'AngularDemo/specs/home.spec.js',
        //'AngularDemo/specs/productEdit.spec.js',
        //'AngularDemo/specs/productEditInfo.spec.js',
        //'AngularDemo/specs/productEditPrice.spec.js',
    //],
   
    suites: {
        AngularDemo: 'specs/*.spec.js',
    },

    multiCapabilities: [
        //{ 'browserName': 'firefox', 'platform': 'ANY',  maxInstances: 2 },
        { 'browserName': 'chrome', shardTestFiles: false, maxInstances: 1 },
        { 'browserName': 'internet explorer', 'platform': 'ANY', 'version': '11', ignoreZoomSetting: true, shardTestFiles: false, maxInstances: 1 }
    ],
    //maxSessions: -1,
    rootElement: "body", 
    verbose: true,

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    }

}