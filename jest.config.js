module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
    '!src/context/*.ts',
    '!src/context/*.tsx',
    '!src/data/*.json',
    '!src/utils/interfaces/*.ts',
  ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    testRegex: 'src/.*\\.test\\.(js|ts|tsx)$',
    presets: ['@babel/preset-react', '@babel/preset-typescript'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
      },
}