---
title: Get Started in the Browser
description: Explore the fundamentals of JavaScript and enhance your web development skills with this introductory guide. Perfect for beginners and experienced developers alike, learn how to execute JavaScript directly in your browser, manipulate HTML documents, and leverage external JavaScript files for efficient coding. Discover the power of JavaScript through hands-on examples and best practices, paving the way for dynamic web interactions. Start your JavaScript journey today and elevate your web development capabilities.
---

# {$frontmatter.title}

## From the Browser
### 1. Access the Console
Most modern web browsers come with built-in developer tools that include a JavaScript console. This console allows you to execute JavaScript code directly in the browser, making it easy to start experimenting right away.

- **Open Developer Tools**: Right-click on a webpage and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac) to open the developer tools.
- **Access the Console**: Navigate to the "Console" tab within the developer tools. This is where you'll write and execute your JavaScript code.

### 2. Write and Execute JavaScript
Now that you have access to the console, you can start writing JavaScript code. Simply type your code into the console and press Enter to execute it.

Example:

```javascript
console.log("Hello, world!");
```

This will print "Hello, world!" to the console.

To complete the course on getting started with JavaScript, let's expand on the sections provided, focusing on running JavaScript from a HTML file and from a JavaScript file. This will give you a comprehensive understanding of how to work with JavaScript in various environments.

## From a HTML File

Running JavaScript directly from a HTML file is straightforward. You can either place your script tags in the head section or just before the closing body tag (`</body>`). Here's how you can do it:

### Inline Scripting

Inline scripting involves placing your JavaScript code directly within `<script>` tags in your HTML document. This method is less common due to separation of concerns principles, but it's still useful for small scripts or quick tests.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript in HTML</title>
</head>
<body>

<h1 id="demo">Hello, World!</h1>

<script>
document.getElementById('demo').innerHTML = 'Hello, JavaScript!';
</script>

</body>
</html>
```

In this example, the script changes the content of the `<h1>` element with the ID `demo`.

### External JavaScript Files

For larger projects or to keep your HTML clean, it's better to use external JavaScript files. You link these files using the `<script src="your-script.js"></script>` syntax, typically at the end of the body tag.

**HTML File:**
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

This approach separates your JavaScript logic from your HTML structure, making both easier to manage and maintain.
