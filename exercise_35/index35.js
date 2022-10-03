/*
    Animals: 
    Think of at least three different animals that have a common characteristic.
    Store the names of these animals in a list, and then use a for loop to print 
    out the name of each animal.
    • Modify your program to print a statement about each animal, such as 
    A dog would make a great pet.
    • Add a line at the end of your program stating what these animals have in
    common. You could print a sentence such as Any of these animals would
    make a great pet!
*/

var animals = ['Lion', 'Wolf', 'Leopard'];
for (let i = 0; i < animals.length; i++) {
  // console.log(animals[i]);
  console.log(
    `A ${animals[i].toLowerCase()} can run fast and one of the prey animals`
  );
}
console.log('None of these animals would make a great pet!');
