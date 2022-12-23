# Exercise: JSONPlaceholder API

In this exercise, you will create a web application that displays a list of users and allows the user to view and add posts for each user. You will use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) public API to retrieve and manipulate data.

## Part 1: Displaying a list of users

1. Create a web page that displays a list of users. The list should contain the user's name, email, and phone number.
2. Use the JSONPlaceholder API to retrieve a list of users. The API endpoint is `https://jsonplaceholder.typicode.com/users`. This endpoint returns an array of JSON objects, each representing a user.
3. Use JavaScript and an AJAX request to retrieve the list of users from the API.
4. Parse the JSON response and extract the name, email, and phone number for each user.
5. Use DOM manipulation techniques to create a table on the page and insert the user information into the table.

## Part 2: Adding a new user

1. Add a form to the page that allows the user to add a new user to the list. The form should have fields for the user's name, email, and phone number.
2. When the user submits the form, use an AJAX request to send the new user information to the JSONPlaceholder API. The API will return a JSON object representing the new user.
3. Add the new user to the table on the page.

## Part 3: Deleting a user

1. Add a button next to each user in the table that allows the user to delete the user from the list.
2. When the user clicks the button, use an AJAX request to send a DELETE request to the JSONPlaceholder API to delete the user.
3. Remove the user from the table on the page.

## Part 4: Viewing a user's posts

1. Add a column to the user table that contains a link for each user. When the user clicks the link, the application should display a new page that shows all the posts for that user.
2. Use an AJAX request to retrieve the list of posts for the selected user from the JSONPlaceholder API. The endpoint for retrieving a user's posts is `https://jsonplaceholder.typicode.com/posts?userId=<userId>`, where `<userId>` is the ID of the user.
3. Parse the JSON response and extract the title and body of each post.
4. Use DOM manipulation techniques to create a list of posts on the page and insert the post information into the list.
5. Add a link at the top of the page that allows the user to return to the list of users.

This exercise should help you practice making AJAX requests, parsing JSON responses, and manipulating the DOM using JavaScript.