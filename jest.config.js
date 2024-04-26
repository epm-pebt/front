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
    collectCoverage: false,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
            '<rootDir>/__mocks__/fileMock.js',
        '^src/(.*)$': '<rootDir>/src/$1',
        '^.+\\.svg\\?react$': '<rootDir>/__mocks__/main-svg-mock.jsx',
    },
};
