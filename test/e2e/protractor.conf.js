exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'spec/**/*.js'
    ],

    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }
    ],

    baseUrl: 'http://localhost:9000',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};