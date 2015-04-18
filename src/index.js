'use strict'

export function alias (...aliases) {
  return function (target, name, descriptor) {
    aliases.forEach(alias => {
      Object.defineProperty(target, alias, descriptor)
    })
  }
}
