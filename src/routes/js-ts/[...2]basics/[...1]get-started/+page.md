---
title: Get Started
description: Explore the fundamentals of JavaScript and enhance your web development skills with this introductory guide. Perfect for beginners and experienced developers alike, learn how to execute JavaScript directly in your browser, manipulate **HTML** documents, and leverage external JavaScript files for efficient coding. Discover the power of JavaScript through hands-on examples and best practices, paving the way for dynamic web interactions. Start your JavaScript journey today and elevate your web development capabilities.
---

# {$frontmatter.title}

## From the Browser
### 1. Access the Console
Most modern web browsers come with built-in developer tools that include a **JavaScript** console. This console allows you to execute **JavaScript** code directly in the browser, making it easy to start experimenting right away.

- **Open Developer Tools**: Right-click on a webpage and select "Inspect" or press <kbd class="kbd">Ctrl+Shift+I</kbd> (Windows/Linux) or <kbd class="kbd">Cmd+Opt+I</kbd> (Mac) to open the developer tools. You can alson presso on <kbd class="kbd">F12</kbd> to open the developer tools.
- **Access the Console**: Navigate to the "**Console**" tab within the developer tools. This is where you'll write and execute your **JavaScript** code.

### 2. Write and Execute JavaScript
Now that you have access to the console, you can start writing **JavaScript** code. Simply type your code into the console and press Enter to execute it.

Example:

```javascript
console.log("Hello, world!");
```

This will print "Hello, world!" to the console.

Let's now focusing on running **JavaScript** from a **HTML** file and from a **JavaScript** file. This will give you a comprehensive understanding of how to work with **JavaScript** in various environments.

## From a HTML File

Running **JavaScript** directly from a **HTML** file is straightforward. You can either place your script tags in the head section or just before the closing body tag (`</body>`). Here's how you can do it:

### Inline Scripting

Inline scripting involves placing your **JavaScript** code directly within `<script>` tags in your **HTML** document. This method is less common due to separation of concerns principles, but it's still useful for small scripts or quick tests.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript in **HTML**</title>
</head>
<body>

<h1>Hello, World!</h1>

<script>
    console.log("Hello, JavaScript!");
</script>

</body>
</html>
```

### External JavaScript Files

For larger projects or to keep your **HTML** clean, it's better to use external **JavaScript** files. You link these files using the `<script src="your-script.js"></script>` syntax, typically at the end of the body tag.

****HTML** File:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External JS Example</title>
</head>
<body>

<h1 id="greeting">Hello, World!</h1>

<script src="script.js"></script>
</body>
</html>
```

**JavaScript File (script.js):**
```javascript
console.log("Hello, JavaScript!");
```

## Best Practices for Including JavaScript

When incorporating JavaScript into your web pages, it's important to consider how it affects the loading performance of your site. Placing JavaScript incorrectly can lead to slower page loads and a worse user experience. Here are some recommendations to ensure your JavaScript is included optimally:

### Place Scripts at the Bottom of the Body Tag

Whenever possible, place your `<script>` tags just before the closing `</body>` tag. This ensures that the HTML content loads first, which can significantly improve page load times since the browser doesn't have to wait for the JavaScript to be downloaded and executed before rendering the page.

```html
<body>
    <!-- Your HTML content here -->

    <script src="your-script.js"></script>
</body>
```

### Use the `defer` Attribute

If you must include your `<script>` tag in the `<head>` of your document, consider using the `defer` attribute. This tells the browser to continue parsing the HTML while downloading the script, and then execute the script after the document has been fully parsed. This prevents the script from blocking the rendering of the page.

```html
<head>
    <script defer src="your-script.js"></script>
</head>
```

The `defer` attribute is particularly useful for external scripts that don't need to run immediately and can safely be loaded asynchronously.

By following these best practices, you can ensure that your JavaScript is included in a way that enhances the performance and usability of your web pages.

## Usage of "use strict" for catching common coding mistakes and "unsafe" actions

The `"use strict"` directive is a feature in JavaScript that helps catch common coding mistakes and "unsafe" actions such as using undeclared variables. When you add `"use strict"` at the beginning of your JavaScript file or script, it enables stricter parsing and error handling in your code. This means that certain actions that would be ignored or would fail silently in normal JavaScript will throw errors or warnings in strict mode, making it easier to debug and maintain your code.

Here are some key points about `"use strict"`:

1. **Prevents Accidental Global Variables**: In strict mode, assigning a value to an undeclared variable, a read-only property, or a non-writable global variable will throw an error. This helps prevent typos and other mistakes that could lead to hard-to-find bugs.

2. **Enforces Better Coding Practices**: Strict mode disallows certain syntax that is considered to be prone to errors or confusing, such as using `with` statements or deleting variables, functions, or function arguments.

3. **Improves Performance**: By enforcing these restrictions, JavaScript engines can optimize the execution of strict mode code better than non-strict code because they can make assumptions about how the code behaves.

4. **Compatibility**: While strict mode is a feature of ECMAScript 5 (ES5) and later versions, most modern browsers support it. However, it's important to note that strict mode code might not run correctly in older environments that do not recognize the `"use strict"` directive.

To enable strict mode, simply add `"use strict";` at the top of your JavaScript file or inside a function. When placed at the top of a file, it applies to the entire file. When placed inside a function, it applies only to that function.

Example of enabling strict mode for an entire file:

```javascript
"use strict";

// Your code here...
```

Example of enabling strict mode for a single function:

```javascript
function myFunction() {
  "use strict";
  // Function code here...
}
```

Using strict mode is considered a good practice because it helps catch common mistakes early and encourages better coding habits.

## Additional resources

- MDN
    - [Getting Started with JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#getting_started_with_javascript)

- JavaScript Infos
    - [Developer console](https://javascript.info/devtools)
    - [hello-world tutorial](https://javascript.info/hello-world)
    - [The modern mode, "use strict"](https://javascript.info/strict-mode)

- W3Schools
    - [Where To JavaScript](https://www.w3schools.com/js/js_whereto.asp)

- Tutorialspoint
    - [Enabling JavaScript](https://www.tutorialspoint.com/javascript/javascript_enabling.htm)
    - [Console.log()](https://www.tutorialspoint.com/javascript/javascript_console_log.htm)
    - [Strict Mode](https://www.tutorialspoint.com/javascript/javascript_strict_mode.htm)

- GeeksforGeeks
    - [Introduction to JavaScript](https://www.geeksforgeeks.org/introduction-to-javascript/)
    - [How to Add JavaScript in HTML Document?](https://www.geeksforgeeks.org/where-to-put-javascript-in-an-html-document/)