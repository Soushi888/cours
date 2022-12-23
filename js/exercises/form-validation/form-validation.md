# Form Validation Exercise
## Objective :

Create a JavaScript application that validates a form with the following input fields: name, email, subject, and message. 
The form should be validated when the user clicks the submit button. If any of the fields are invalid, the form should not be submitted and an error message should be displayed.

## Validation Rules :

- All fields are required and must be filled in.
- The email field must contain a valid email address.
- The name field must have a length between 3 and 15 characters.
- The subject field must have a length between 3 and 30 characters.

## Error Display :

- If any of the fields are invalid, an error message should be displayed at the top of the form in red.
- If a field is valid, it should be displayed in green. If it is invalid, it should be displayed in red.

## To complete this exercise, you will need to :

1. Write the HTML for the form.
2. Write the JavaScript code to validate the form when the user clicks the submit button.
3. Write the code to display error messages and change the color of the fields based on their validity.

## Example:

Here is an example of how the form might behave when the user clicks the submit button:

1. If the user has not filled in any of the fields, the form should not be submitted and an error message should be displayed at the top of the form saying "All fields are required."
2. If the user has filled in the name field but it is less than 3 characters or more than 15 characters, the form should not be submitted and an error message should be displayed at the top of the form saying "Name must be between 3 and 15 characters." The name field should be displayed in red.
3. If the user has filled in the subject field but it is less than 3 characters or more than 30 characters, the form should not be submitted and an error message should be displayed at the top of the form saying "Subject must be between 3 and 30 characters." The subject field should be displayed in red.
4. If the user has filled in the email field but it is not a valid email address, the form should not be submitted and an error message should be displayed at the top of the form saying "Email must be a valid email address." The email field should be displayed in red.
5. If all the fields are valid, the form should be submitted and the data should be displayed in the "data" div. The fields should be displayed in green.