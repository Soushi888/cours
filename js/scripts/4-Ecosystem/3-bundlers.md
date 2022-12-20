# JavaScript Bundlers

## What is a JavaScript Bundler?

A JavaScript bundler is a tool that takes JavaScript modules with dependencies and generates static assets representing those modules. The bundler can then be used to serve the application code to the browser. 

The most popular bundlers are [Webpack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/guide/en/) or [Vite](https://vitejs.dev/). We will use [Parcel](https://parceljs.org/) in this course for its simplicity.

## Why use a JavaScript Bundler?

JavaScript's bundlers are used to bundle your code into a single file. This is useful for a few reasons:
 - It reduces the number of requests the browser has to make to load your application.
 - It allows you to use the latest JavaScript features, regardless of whether the browser supports them.
 - It allows you to use packages from NPM, a package manager for JavaScript.
 - It allows you to use packages from CDN, a content delivery network for static assets.
 - It allows you to use packages from local files.
 - It allows you to use packages from other online sources.

## How to use a JavaScript Bundler

### Installation

To install Parcel, run the following command in your terminal located in the root of your project:

```bash
npm install parcel --save-dev
```

### Usage

Parcel accepts any type of file as an entry point, but an HTML file is a good place to start. Parcel will follow all of your dependencies from there to build your app.

Parcel has a development server built in, which will automatically rebuild your app as you make changes. To start it, run the parcel CLI pointing to your entry file:

```bash
npx parcel index.html
```

This will start a development server on port 1234. You can change the port by passing the `--port` flag:

```bash
npx parcel index.html --port 8080
```

### Configuring Parcel

You can viste the [Parcel documentation](https://parceljs.org/docs/) to learn more about configuring and using Parcel.