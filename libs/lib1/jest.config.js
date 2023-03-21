module.exports = {
  displayName: 'lib1',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageReporters: [
    'lcov',
    'text',
    'text-summary'
  ],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'public/tests/libs/lib1',
        outputName: 'ut_report.xml',
      },
    ],
  ],
  coverageDirectory: '../../public/coverage/libs/lib1',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
