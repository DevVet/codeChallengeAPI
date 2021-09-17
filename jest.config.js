module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/seeders/',
    '/models/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/seeders/',
    '/models/'
  ],
  collectCoverage: true,
  coverageDirectory: 'src/tests/reports/coverage',
  coverageReporters: [
    'html',
    'lcov',
    'cobertura',
    'text-summary',
  ],
  coverageThreshold: {
    "./src/": {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleDirectories: [ 'node_modules' ],
  testMatch: [
    '**/(*.)(test).js?(x)',
  ],
  roots: [process.cwd()],
  testURL: 'http://localhost',
}
