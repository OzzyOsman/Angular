// An example configuration file.
var reporter = require('protractor-multicapabilities-htmlreporter_v2');

var dataPath = './Protractor/AngularDemo/TestData/ptor-out-IE.json';
var reportPath = "./Protractor/Reports";

var reportTitle = "UI Tests - Internet Explorer 11";
var reportFileName = reportPath + '/AngularDemo UI Report_IE.html';

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
        { 'browserName': 'internet explorer', 'platform': 'ANY', 'version': '11', ignoreZoomSetting: true, shardTestFiles: true, maxInstances: 3 }
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