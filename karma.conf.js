module.exports = function (config) {

  config.set({

    basePath: '',

    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [

      require('karma-jasmine'),

      require('karma-chrome-launcher'),

      require('karma-jasmine-html-reporter'),

      require('karma-coverage-istanbul-reporter'),

      require('@angular-devkit/build-angular/plugins/karma'),

      require('karma-junit-reporter')

    ],

    client:{

      clearContext: false, // leave Jasmine Spec Runner output visible in browser

      jasmine: {

        random: false

      },

      captureConsole: true

    },

    coverageIstanbulReporter: {

      dir: require('path').join(__dirname, 'coverage'),

      reports: [ 'html', 'lcovonly' ],

      fixWebpackSourcePaths: true,

      thresholds: {

        statements: 75,

        lines: 75,

        branches: 55,

        functions: 80

      }

    },

    captureTimeout: 210000,

    browserDisconnectTolerance: 3,

    browserDisconnectTimeout : 210000,

    browserNoActivityTimeout : 210000,

    reporters: ['progress', 'kjhtml','junit'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: true,

    browsers: ['ChromeHeadless'],

    singleRun: false,

    restartOnFileChange: true,

    customLaunchers: {

      ChromeHeadlessNoSandbox: {

        base: 'ChromeHeadless',

        flags: [

                '--no-sandbox',

                '--disable-gpu',

                '--enable-logging',

                '--no-default-browser-check',

                '--no-first-run',

                '--disable-default-apps',

                '--disable-popup-blocking',

                '--disable-translate',

                '--disable-background-timer-throttling',

                '--disable-renderer-backgrounding',

                '--disable-device-discovery-notifications',

                '--remote-debugging-port=9222',

                '--disable-web-security'

        ]

      }

    },

    singleRun: true,

    concurrency: Infinity,

        // the default configuration

        junitReporter: {

            outputDir: 'test-reports', // results will be saved as $outputDir/$browserName.xml

            outputFile: 'junit-report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile

            suite: '', // suite will become the package name attribute in xml testsuite element

            useBrowserName: true, // add browser name to report and classes names

            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element

            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element

            properties: {} // key value pair of properties to add to the section of the report

        }

  });

};