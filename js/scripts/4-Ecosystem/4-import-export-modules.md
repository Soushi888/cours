# Import or Export Modules

## Import

### Import a single export from a module

```js
import {myFunction} from './my-module.js';
```

### Import multiple exports from a module

```js
import {myFunction, myVariable} from './my-module.js';
```

### Import all exports from a module

```js

import * as myModule from './my-module.js';
```

### Import a default export from a module

```js
import myFunction from './my-module.js';
```

### Import a default export and named exports from a module

```js
import myFunction, {myVariable} from './my-module.js';
```

### Import a library

```js
import React from 'react';
```

## Export

### Export a single value

```js
export const myFunction = () => {
	// ...
};
```

### Export multiple values

```js

export const myFunction = () => {
	// ...
};

export const myVariable = 1;
```

### Export multiple values as an object

```js
const myFunction = () => {
	// ...
};

const myVariable = 1;

export {myFunction, myVariable};
```

### Export a function declaration

```js
export function myFunction() {
	// ...
}
```

### Export a class

```js
export class MyClass {
	// ...
}
```

### Export a default value

```js
const myFunction = () => {
	// ...
};

export default myFunction;
```

### Export an anonymous function

```js
export default () => {
	// ...
};
```

### Export an anonymous class

```js
export default class {
	// ...
}
```

