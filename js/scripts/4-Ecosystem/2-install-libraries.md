# Initialising a project with npm

npm allows you to create a project with a `package.json` file. This file contains information about your project, such
as the name, version, and dependencies. It also contains scripts, which are commands that you can run from the command
line.
npm is installed with Node.js, so you don't need to install it separately.

## Initialising a project

To initialise a project, run the following command in the root directory of your project:

```bash
npm init
```

This will create a `package.json` file in the root directory of your project. It will ask you a series of questions
about your project, such as the name, version, and description. You can press enter to accept the default values, or
type your own.

You can also initialise a project with default values by running the following command:

```bash
npm init -y
```

## Installing dependencies

To install a dependency, run the following command:

```bash
npm install <package-name>
```

This will install the latest version of the package and add it to the `dependencies` section of your `package.json`
file.

To install a specific version of a package, run the following command:

```bash
npm install <package-name>@<version>
```

## Installing development dependencies

A development dependency is a package that is only used during development, such as a testing framework. It will not be
included in the production build of your project.

To install a development dependency, run the following command:

```bash
npm install <package-name> --save-dev
```

This will install the latest version of the package and add it to the `devDependencies` section of your `package.json`
file.

## Importing dependencies

To import a dependency, use the `require` function in Node.js or the `import` keyword in ES6.

```js
const express = require('express');
```

or

```js
import React from 'react';
```

### Destucturing imports

You can also destructure imports, which allows you to import specific parts of a package.

```js
const { Router } = require('express');
```

or 

```js
import { useState } from 'react';
```

