/*
    Name Cases: 
        Store a person’s name in a variable, 
        and then print that person’s name in 
        lowercase, uppercase, and titlecase.
*/

var personsName = 'HaSsAn';
var lowerPersonsName = personsName.toLowerCase();
var upperPersonsName = personsName.toUpperCase();
var titlePersonsName =
  personsName.charAt(0) + personsName.slice(1).toLowerCase();
console.log(`Name           : ${personsName}`);
console.log(`Lowercase Name : ${lowerPersonsName}`);
console.log(`Uppercase Name : ${upperPersonsName}`);
console.log(`Titlecase Name : ${titlePersonsName}`);
