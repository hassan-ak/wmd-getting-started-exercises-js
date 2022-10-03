/*
  - Adding Comments: 
      Choose two of the programs you’ve written, 
      and add at least one comment to each. 
      If you don’t have anything specific to write 
      because your programs are too simple at this point, 
      just add your name and the current date 
      at the top of each program file. 
      Then write one sentence describing what the program does.
*/

// Name : Hassan Ali Khan

// Exercise No 2
// store name in a variable and console a message
var personsName = 'Hassan';
console.log(`Hello ${personsName}, would you like to learn some Python today?`);
console.log('');

// Exercise No 3
// name stored in a variable
var personsName = 'HaSsAn';
// name converted to lower case
var lowerPersonsName = personsName.toLowerCase();
// name converted to uppercase
var upperPersonsName = personsName.toUpperCase();
// name converted to titlecase
// First character converted to uppwecase and rest to lower case
var titlePersonsName =
  personsName.charAt(0) + personsName.slice(1).toLowerCase();
// console logged all variables
console.log(`Name           : ${personsName}`);
console.log(`Lowercase Name : ${lowerPersonsName}`);
console.log(`Uppercase Name : ${upperPersonsName}`);
console.log(`Titlecase Name : ${titlePersonsName}`);
