export default {
   testEnvironment: 'jsdom',
   setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
   transform: {
     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
   },
   moduleNameMapper: {
     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Remap des fichiers images
     '\\.(css|scss)$': 'identity-obj-proxy', // Remap des fichiers CSS
   },
 };
 