# jstransformer-marko

[Marko](http://npm.im/marko) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-marko/master.svg)](https://travis-ci.org/jstransformers/jstransformer-marko)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-marko/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-marko)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-marko/master.svg)](http://david-dm.org/jstransformers/jstransformer-marko)
[![NPM version](https://img.shields.io/npm/v/jstransformer-marko.svg)](https://www.npmjs.org/package/jstransformer-marko)

## Installation

    npm install jstransformer-marko

## API

```js
var marko = require('jstransformer')(require('jstransformer-marko'));

var locals = {
  name: "World"
};

marko.render('Hello, ${data.name}!', locals).body
//=> 'Hello, World!'
```

## License

MIT
