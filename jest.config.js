module.exports = {
  roots: ['<rootDir>/src/components'],
  testMatch: ['**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', ''],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
};
