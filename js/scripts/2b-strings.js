const string = "Hello World";
console.log(string);
console.log(string.length); // length includes spaces

let string2 = "     Hello World       ";
console.log(string2, string2.length);
string2 = string2.trim(); // trim removes spaces
console.log(string2, string2.length);

console.log(string2.toUpperCase()); // toUpperCase() returns a new string in uppercase
console.log(string2.toLowerCase()); // toLowerCase() returns a new string in lowercase

console.log(string2.charAt(0)); // charAt() returns the character at the specified index
console.log(string.at(0)); // same as charAt()
console.log(string2[0]); // same as charAt()

console.log(string2.indexOf("o")); // indexOf() returns the index of the first occurrence of a specified value in a string
console.log(string2.indexOf("llo"));
console.log(string2.lastIndexOf("o")); // lastIndexOf() returns the index of the last occurrence of a specified value in a string

console.log(string2.includes("World")); // includes() returns true if a string contains a specified value
console.log(string2.includes("world"));
console.log(string2.toLowerCase().includes("world"));

console.log(string2.startsWith("Hello")); // startsWith() returns true if a string starts with a specified value
console.log(string2.endsWith("World")); // endsWith() returns true if a string ends with a specified value

console.log(string2.repeat(3)); // repeat() returns a new string with a specified number of copies of an existing string

console.log(string2.split(" ")); // split() returns an array of substrings by separating the string into substrings
console.log(string2.split(" ").join("-")); // join() returns a new string by concatenating all the elements of an array

console.log(string2.replace("World", "Universe")); // replace() returns a new string with some or all matches of a pattern replaced by a replacement

console.log(string2 + " !"); // concatenation
console.log(`${string2} !`); // template literal

console.log(string2.substring(0, 5)); // substring() returns the part of the string between the start and end indexes, or to the end of the string
console.log(string2.slice(0, 5)); // slice() extracts a part of a string and returns the extracted part in a new string
console.log(string2.slice(-5)); // negative indexes can be used, where -1 specifies the last character, -2 the second last character, and so on

console.log(string2.padStart(20, "*")); // padStart() pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
console.log(string2.padEnd(20, "*")); // padEnd() pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
console.log(string2.padStart(20, "*").padEnd(30, "*"));

console.log(string2.match("o")); // match() returns an array of all matches in a string
console.log(string2.search("o")); // search() returns the index of the first match in a string

// literal can be used to create a multiline string
let multiLineString = `Hello World,
This is a multi-line string.`;
console.log(multiLineString);

multiLineString = "Hello World, \nThis is a multi-line string."; // backslash n is used to create a new line
console.log(multiLineString);

const tabString = "Hello\tWorld"; // backslash t is the tab character
console.log(tabString);

const backslashString = "Hello\\World"; // backslash is used to escape characters
console.log(backslashString);

const numberToString = 123;
console.log(numberToString.toString()); // toString() returns a string representing the specified object

const stringToNumber = "123";
console.log(parseInt(stringToNumber)); // parseInt() parses a string and returns an integer
const stringToNumber2 = "123.456";
console.log(parseFloat(stringToNumber2)); // parseFloat() parses a string and returns a floating point number
