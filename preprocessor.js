var babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    return babelJest.process(src, filename).replace(/^import.*\.scss.*;$/gm, '');

    // if (/\.scss$/.test(filename)) {
    //   return '';
    // } else {
    //   return babelJest.process(src, filename).replace(/^import.*\.scss.*;$/gm, '');
    // }
  }
}
