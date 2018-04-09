'use strict'

const marko = require('marko')

exports.name = 'marko'
exports.outputFormat = 'html'

function getTemplate(file, options) {
  return marko.load(require.resolve(file), options || {})
}

exports.compileFile = (file, options) => {
  const template = getTemplate(file, options)
  return locals => {
    return template.renderToString(locals || {})
  }
}

exports.compileFileAsync = (file, options) => {
  return new Promise((resolve, reject) => {
    const template = getTemplate(file, options)
    if (!template) {
      return reject(new Error('Failed to load template.'))
    }
    return resolve(locals => {
      return template.renderToString(locals || {})
    })
  })
}
