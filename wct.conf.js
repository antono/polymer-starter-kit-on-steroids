module.exports = {
  suites: ['./test/'],
  root: 'dist',
  verbose: false,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    }
  },
};
