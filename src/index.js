'use strict'

var toArray = [].slice

module.exports = function alias () {
  var aliases = toArray.call(arguments)
  return function (target, name, descriptor) {
    aliases.forEach(function (alias) {
      Object.defineProperty(target, alias, descriptor)
    })
  }
}
