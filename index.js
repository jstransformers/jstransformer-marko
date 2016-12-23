'use strict'

var marko = require('marko')
var Promise = require('promise')

exports.name = 'marko'
exports.outputFormat = 'html'

function getTemplate(file, options) {
  return marko.load(require.resolve(file), options || {})
}

exports.compileFile = function (file, options) {
  var template = getTemplate(file, options)
  return function (locals) {
    return template.renderSync(locals || {})
  }
}

exports.compileFileAsync = function (file, options) {
  return new Promise(function (resolve, reject) {
    var template = getTemplate(file, options)
    if (!template) {
      return reject(new Error('Failed to load template.'))
    }
    return resolve(function (locals) {
      return template.renderSync(locals || {})
    })
  })
}
