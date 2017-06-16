const fs = require('fs')
const exec = require('child_process').exec
const pathJS = 'js/src/'
const pathDistJS = 'js/dist/'
const rollup = 'rollup -c ./build/rollup.plugin.config.js'

function build(files) {
  for (var i = 0; i < files.length; i++) {
    const file = files[i]
    const pathFile = pathJS + file
    const pathDistFile = pathDistJS + file
    const moduleName = getModuleName(file)
    exec(rollup + ' --environment FILE:' + file + ',MODULE:' + moduleName, function (error) {
      if (error) {
        throw error
      }
      console.log(pathFile + ' -> ' + pathDistFile)
    })
  }
}

function getModuleName(file) {
  const tmp = file.split('.')
  var moduleName = file
  if (tmp.length > 0) {
    moduleName = tmp[0].toLowerCase()
  }
  return moduleName
}

fs.readdir(pathJS, (err, files) => {
  if (err) {
    throw err
  }
  build(files)
})
