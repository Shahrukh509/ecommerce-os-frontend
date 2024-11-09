const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@services':path.resolve(__dirname,'src/services'),
    '@pages':path.resolve(__dirname,'src/views/pages'),
    '@routes':path.resolve(__dirname,'src/routes'),
    '@auth':path.resolve(__dirname,'src/Authentication')

  })
);
