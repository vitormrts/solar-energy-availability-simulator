const esModules = ['axios', 'axios-mock-adapter'].join('|');

module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest'
    ]
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
  bail: true,
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1'
  },
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/components/**/*.{ts,tsx}',
    './src/hooks/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './src/devUtils/**/*.{ts,tsx}',
    './src/infra/**/*.{ts,tsx}',
    '!./src/**/*.stories.tsx',
    '!./src/**/index.{js,jsx,ts,tsx}',
    '!./src/**/*.types.{js,jsx,ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  coverageReporters: ['text', 'cobertura', 'lcov']
};
