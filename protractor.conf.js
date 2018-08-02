const
    glob = require('glob'),
    protractor = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();

exports.config = {

    baseUrl: 'http://localhost:8080/home',

    seleniumServerJar: seleniumJar,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: ['features/**/tmswaybill.feature'],

    ignoreSynchronization: true,

    cucumberOpts: {
        require: ['env.js', 'features/**/*.ts', 'spec/*.ts','screenplay/*/*.ts'],
        format: 'pretty',
        compiler: 'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars'
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    }
};
