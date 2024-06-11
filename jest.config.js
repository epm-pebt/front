export default {
    roots: ['<rootDir>/tests'],
    testMatch: [
        '**/__tests__/**/*.+(js|jsx)',
        '**/?(*.)+(spec|test).+(js|jsx)',
    ],
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    verbose: true,
    collectCoverage: true, // Enable coverage collection
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageDirectory: 'coverage', // Directory where coverage reports will be saved
    coverageReporters: ['html', 'text', 'lcov'], // Report formats to generate
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 95,
            lines: 90,
            statements: 90,
        },
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom', './tests/setupTests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
            '<rootDir>/__mocks__/fileMock.js',
        '^src/(.*)$': '<rootDir>/src/$1',
        '^.+\\.svg\\?react$': '<rootDir>/__mocks__/main-svg-mock.jsx',
    },
};
