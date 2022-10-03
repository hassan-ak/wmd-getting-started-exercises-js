/*
    Cars: 
    Write a function that stores information about a car in a Object.
    The function should always receive a manufacturer and a model name. It
    should then accept an arbitrary number of keyword arguments. Call the function
    with the required information and two other name-value pairs, such as a
    color or an optional feature.
    Print the Object that’s returned to make sure all the information was
    stored correctly.
*/

function car(manufacturer, model_name, ...data) {
  let carSpec = {};
  carSpec['manufacturer'] = manufacturer;
  carSpec['model_name'] = model_name;

  if (typeof data[0] === 'object') {
    for (let i = 0; i < Object.entries(data[0]).length; i++) {
      carSpec[Object.entries(data[0])[i][0]] = Object.entries(data[0])[i][1];
    }
  }
  return carSpec;
}

var car1 = car('General Motors Co.', 'Buick LaCrosse');

var car2 = car('Ford Motor Co', 'Fiesta', {
  color: 'Black',
  facelift: 'Yes',
});

var car3 = car('Volkswagen AG', 'Tiguan', {
  engine: 'Petrol',
  transmission: '6-speed',
});

console.log('Car1 : ', car1);
console.log('Car2 : ', car2);
console.log('Car3 : ', car3);
