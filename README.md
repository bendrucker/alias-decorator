# alias-decorator [![Build Status](https://travis-ci.org/bendrucker/alias-decorator.svg?branch=master)](https://travis-ci.org/bendrucker/alias-decorator)

Alias methods via an ES7 decorator

## Installing
```sh
$ npm install alias-decorator
```

## Usage
```js
import alias from 'alias-decorator'

class Dog {
  @alias('bark', 'growl')
  speak () {
    console.log('woof')
  }
}

const dog = new Dog()
dog.speak === dog.bark // true
dog.bark === dog.growl // true
```

`alias` copies your property descriptor directly, so properties like `enumerable` are preserved.
