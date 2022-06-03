/*

given a string
change the string so that each character is changed to the next character in the alphabet
return the altered string
cat would be dbu

each letter on your keyboard has an ascii value
a number essentially that it is associated with

use charCodeAt() first argument is the index in the string returns ascii value
use fromCharCode() first argument ascii value, returns character

cat
charCodeAt(0) will return 99
fromCharCode(100) will return 'd'

input and output all lowercase
if char is z, must go to a

initialize results in empty array
loop through the input string, iterate by character
for each character, find the charCodeAt
add 1 to the charCode
convert back to letter
push letter to results array
concatenate array letters back to string
*/

const alphabet = (s) => {
  let results = '';

  for (let i = 0; i < s.length; i++) {
    const initial = s.charCodeAt(i); // expecting it to return ascii value of letter at index
    const newValue = initial === 122 ? 97 : initial + 1;
    const newLetter = String.fromCharCode(newValue); // expecting to return letter
    results += newLetter;
  }
  return results
}
