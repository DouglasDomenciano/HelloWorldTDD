# HelloWorldTDD
[![Build Status](https://travis-ci.org/DouglasDomenciano/HelloWorldTDD.svg?branch=master)](https://travis-ci.org/DouglasDomenciano/HelloWorldTDD)
[![Coverage Status](https://coveralls.io/repos/github/DouglasDomenciano/HelloWorldTDD/badge.svg?branch=master)](https://coveralls.io/github/DouglasDomenciano/HelloWorldTDD?branch=master)

A little way to create one Hello World app, using TDD, Hooks, Travis, Coveralls, and much more.

## Browser Support

This simple example is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
 ✔ | ✔ | ✔ | ✔ | ✔ |

## Methods

> Follow the methods that the library provides.

### helloWorld()

> This will return a simple phrase ` Hello World `.

### helloWorldWithName(parameter)

> This will return a phrase more your name parameter ` Hello World yourNameParameter`.

**Arguments**

| Argument  | Type    | Options                        |
|-----------|---------|--------------------------------|
|`parameter`|*string* |'Is a name to concat in phrase' |


**Example**

```js
    console.log(helloworldtdd.helloWorldWithName("Douglas"))
    // Will return 'Hello World Douglas'
  })
```

### Prerequisities

Do you need a little knowledge in JavaScript


## Installing

```
npm install helloworldtdd --save-dev
```

just below a small example of import and use

## How to use

### ES6
```js

// To import a specific method
import { helloWorldWithName } from 'helloworldtdd';

// For all methods use *
import * as yourAlias from 'helloworldtdd';

```

### CommonJS

```js

const youVariable = require('helloworldtdd');

// Using...
youVariable.helloWorldWithName("Name");

```

### Using in Browser (UMD)

```html

<!-- to import -->
<script src="spotify-wrapper.umd.min.js"></script>

```
After that the library will be available to the Global as `helloworldtdd`. Follow an example:

```js
// To setting a return value in you div to show for user...
document.getElementById('yourDiv').innerHTML = helloworldtdd.helloWorldWithName("NameToShow");

```

## Running the tests

For run the test so you need a npm script execute

### A example

Running only once

```
npm test
```

Running with a watcher for reload on save the files

```
npm run test:tdd

```
And if you need a status of coverage tests run

```
npm run test:coverage
```

## Authors

| ![Douglas Domenciano](https://avatars0.githubusercontent.com/u/17892023?s=400&u=415ca6c987e97e58191c70ba433f800b3314c393&v=4)|
|:---------------------:|
|  [Douglas Domenciano](https://github.com/DouglasDomenciano/)   |

See also the list of [contributors](https://github.com/DouglasDomenciano/HelloWorldTDD/contributors) who participated in this project.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/DouglasDomenciano/HelloWorldTDD/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/DouglasDomenciano/HelloWorldTDD/). 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Enjoy and play

It is a small and very simple lib, but it was created for study reasons, thank you to everyone who can give you suggestions, tips for improvements, etc ...

Thanks.