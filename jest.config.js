module.exports = {
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.(t|j)sx?$': 'ts-jest'
  }
}
