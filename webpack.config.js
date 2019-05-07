const path = require('path');

module.exports = {
  entry: './matrix.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-matrix.js',
    library: 'matrix',
    libraryTarget: 'umd',
  }
};
