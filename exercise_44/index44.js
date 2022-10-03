/*
    Sandwiches: 
    Write a function that accepts a array of items a person wants on a sandwich. 
    The function should have one parameter 
    that collects as many items as the function call provides, 
    and it should print a summary of the sandwich
    that is being ordered. Call the function three times, 
    using a different number
    of arguments each time.
*/

function make_sandwich(...ing) {
  if (ing.length > 0) {
    if (ing.length > 1) {
      ing.splice(ing.length - 1, 0, 'and');
    }
    console.log(`This sandwich is made up of ${ing.join()}`);
  }
}

make_sandwich('cheese');
make_sandwich('whole-grain bread', 'hummus', 'tomato', 'cucumber', 'cheese');
make_sandwich('whole-grain bread', 'lunch meat', 'cheese', 'spinach', 'tomato');
make_sandwich(
  'Bread',
  'Cheese',
  'Mayonnaise sauce',
  'Salt',
  'Black pepper',
  'Mustard',
  'Lettuce leaves'
);
