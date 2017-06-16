const multiEntry = require('rollup-plugin-multi-entry')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

module.exports = {
  entry: 'js/src/*.js',
  format: 'umd',
  moduleName: 'bootstrap',
  plugins: [multiEntry(), resolve({
    jsnext: true
  }), babel({
    exclude: 'node_modules/**'
  })],
  dest: 'dist/js/bootstrap.js'
}
