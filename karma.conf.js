// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      // Added manualy
      require('karma-coverage'),
      // require('karma-sonarqube-unit-reporter'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['progress', 'kjhtml', 'coverage',
    //  'sonarqubeUnit'
    ],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,

    // Added manualy
    preprocessors: {
      'src/**/*.ts': ['coverage'],
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../public/coverage'),
      reporters: [
        // les reporters sont spécifiés par les fichiers spécifiques dev et CI
        { type: 'html', subdir: '.' },
        { type: 'lcov', subdir: '.' },
        { type: 'text', subdir: '.' },
        { type: 'text-summary', subdir: '.' }
      ],
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputDir: '../public/tests',
      overrideTestDescription: true,
      testPaths: ['./src'],
      testFilePattern: '.spec.ts',
      useBrowserName: false,
    },
  };
};
