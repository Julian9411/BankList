const transformPackages = [
  '@react-native',
  'react-native',
  '@react-navigation',
];

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./src/**/*.d.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 65,
      functions: 70,
      lines: 70,
    },
  },
  transformIgnorePatterns: [`node_modules/(?!${transformPackages.join('|')})`],
  testRegex: './__tests__/.*.test.tsx?$',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: [
    '<rootDir>/__tests__/setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
