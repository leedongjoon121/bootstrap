import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'js/src/*.js',
    format: 'umd',
    moduleName: 'bootstrap',
    plugins: [multiEntry(), resolve({
        jsnext: true
    }), babel({
      exclude: 'node_modules/**',
    })],
    dest: 'dist/js/bootstrap.js'
};