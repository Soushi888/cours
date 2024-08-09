---
title: What is CSS ?
description: CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the look and formatting of a document written in HTML. CSS allows developers to control the visual presentation of web pages, including layout, colors, fonts, and more, without altering the actual HTML content. This separation of content from presentation enhances readability and maintainability of the code, as well as allows for greater flexibility and consistency across multiple web pages.
---

# {$frontmatter.title}

**CSS**, which stands for *Cascading Style Sheets*, is a style sheet language used for describing the look and formatting of a document written in **HTML**. **CSS** allows developers to control the visual presentation of web pages, including layout, colors, fonts, and more, without altering the actual **HTML** content. This separation of content from presentation enhances readability and maintainability of the code, as well as allows for greater flexibility and consistency across multiple web pages.

**CSS** is composed of selectors and declarations. Selectors target **HTML** elements, and declarations specify the style applied to those elements. Each declaration consists of a **CSS** property and a value, separated by a colon (`:`). Multiple declarations can be specified for a single selector, each declaration setting a different property of the selected element. Styles are grouped together inside curly braces (`{}`), forming a **CSS** rule set.

Here's a simple example of **CSS**:

```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```

In this example:
- The `body` selector targets the `<body>` element of the **HTML** document, applying a light blue background color.
- The `h1` selector targets `<h1>` elements, setting their text color to navy and adding a left margin of 20 pixels.
- The `p` selector targets `<p>` elements, specifying the font family as Verdana and the font size as 20 pixels.

**CSS** can be included in **HTML** documents in three ways:
- Inline, directly within the **HTML** elements using the `style` attribute.
- Internal, within `<style>` tags placed inside the `<head>` section of the **HTML** document.
- External, linking to an external `.css` file using the `<link>` tag in the `<head>` section of the **HTML** document.

**CSS** is a cornerstone technology of the World Wide Web, alongside **HTML** and **JavaScript**, and is essential for creating visually appealing and functional web pages.