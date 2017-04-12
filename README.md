# babelute-html-dom-pragmatics

[![Travis branch](https://img.shields.io/travis/nomocas/babelute-html-dom-pragmatics/master.svg)](https://travis-ci.org/nomocas/babelute-html-dom-pragmatics)
[![bitHound Overall Score](https://www.bithound.io/github/nomocas/babelute-html-dom-pragmatics/badges/score.svg)](https://www.bithound.io/github/nomocas/babelute-html-dom-pragmatics)
[![npm](https://img.shields.io/npm/v/babelute-html-dom-pragmatics.svg)]()
[![npm-downloads](https://img.shields.io/npm/dm/babelute-html-dom-pragmatics.svg)]()
[![licence](https://img.shields.io/npm/l/babelute-html-dom-pragmatics.svg)](https://spdx.org/licenses/MIT)
[![dependecies](https://img.shields.io/david/nomocas/babelute-html-dom-pragmatics.svg)]()
[![dev-dependencies](https://img.shields.io/david/dev/nomocas/babelute-html-dom-pragmatics.svg)]()
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Simple DOM engine for babelute-html-lexicon.

More for demo on how create a pragmatic engine for a DSL.

## Usage

```
> yarn i babelute babelute-html-lexicon babelute-html-dom-pragmatics
```

```javascript
import htmlLexicon from 'babelute-html-lexicon';
import 'babelute-html-dom-pragmatics';

const h = htmlLexicon.initializer();

h.section(
	h.class('my-class')
	.h1('hello world')
	.div(h.id('my-id'), 'lorem ipsum...', h.p('...'))
	.button('fire !', h.click((e) => console.log('bouh', e)))
)
.$toDOM(document.getElementById('...'));
```

## Licence

The [MIT](http://opensource.org/licenses/MIT) License

Copyright 2017 (c) Gilles Coomans

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
