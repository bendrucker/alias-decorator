'use strict'

import test from 'tape'
import {alias} from '../'

test('alias', (t) => {
  const obj = {
    @alias('bar', 'baz')
    foo () {

    }
  }
  t.equal(obj.foo, obj.bar)
  t.equal(obj.foo, obj.baz)
  t.end()
})
