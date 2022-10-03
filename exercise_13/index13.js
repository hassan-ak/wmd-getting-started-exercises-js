/*
    Your Own Array: 
    Think of your favorite mode of transportation, 
    such as a motorcycle or a car, 
    and make a list that stores several examples. 
    Use your list to print a series of statements about these items, 
    such as “I would like to own a Honda motorcycle.”
*/

var cars = [
  'Lamborghini Diablo',
  'Ford Raptor',
  'Ferrari Testarossa',
  'Porsche 911 Carrera',
  'Jensen Interceptor',
  'Lamborghini Huracán',
  'Ferrari 812 Superfast',
  'Jeep Gladiator',
];
var statements = ['I would like to own a ', 'The last car I owned was a '];
for (let i = 0; i < statements.length; i++) {
  for (let j = 0; j < cars.length; j++) {
    console.log(statements[i] + cars[j] + '.');
  }
}
