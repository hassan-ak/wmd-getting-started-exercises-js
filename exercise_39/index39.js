/*
    City Names: 
    Write a function called city_country() that takes in the name
    of a city and its country. The function should return a string formatted like this:
    "Lahore, Pakistan"
    Call your function with at least three city-country pairs, and print the value
    that’s returned.
*/

function describe_city(city, country) {
  return `"${city.charAt().toUpperCase() + city.slice(1).toLowerCase()}, ${
    country.charAt().toUpperCase() + country.slice(1).toLowerCase()
  }"`;
}

var city1 = describe_city('Karachi', 'pakistan');
var city2 = describe_city('Dehli', 'InDia');
var city3 = describe_city('london', 'england');

console.log(city1);
console.log(city2);
console.log(city3);
