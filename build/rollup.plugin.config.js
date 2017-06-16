const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')

const FILE = process.env.FILE
const MODULE = process.env.MODULE

module.exports = {
  entry: 'js/src/' + FILE,
  external: ['popper.js'],
  format: 'umd',
  moduleName: MODULE,
  plugins: [resolve({
    jsnext: true
  }), babel({
    exclude: 'node_modules/**'
  })],
  dest: 'js/dist/' + FILE,
  sourceMap: true
}
