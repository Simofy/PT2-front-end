// "use strict";

// const obj = {
//   test: 10,
//   country: 'BE',
//   name: 'Country code',
//   listOfRef: [0, 1, 2, 3, 4],
//   otherObj: {
//     test: 50,
//     otherObj: {
//       test: 'test',
//     }
//   }
// };

const list = [{ "name": "Raymus Antilles", "price": 79.35603469054115, "vegan": true }, { "name": "Leia Organa", "price": 22.80356823841132, "vegan": true }, { "name": "Bossk", "price": 81.04722832296154, "vegan": false }, { "name": "Zam Wesell", "price": 38.622460713368035, "vegan": true }, { "name": "Zam Wesell", "price": 35.98207185887219, "vegan": true }, { "name": "Kit Fisto", "price": 10.793661252924336, "vegan": true }, { "name": "Sebulba", "price": 77.81541528993085, "vegan": false }, { "name": "Sebulba", "price": 51.782583222686476, "vegan": false }, { "name": "Dooku", "price": 42.92765566564978, "vegan": true }, { "name": "R4-P17", "price": 69.38057382897733, "vegan": true }, { "name": "Luke Skywalker", "price": 50.20522667428373, "vegan": false }, { "name": "Cordé", "price": 34.50405450310585, "vegan": true }]

// for (let i = 0; i < list.length; i += 1) {
//   const {
//     name
//   } = list[i];
//   console.log(name);


const testArray = [10, 50, 2.99, 'alio', {
  test123: '-',
}];

const [numberValue, otherNumberValue, , , {
  test123: naujas,
}] = testArray;

console.log(numberValue, otherNumberValue, naujas)


// const {
//   country,
//   name,
//   test,
//   otherObj: {
//     otherObj: {
//       test: testOtherObj
//     }
//   }
// } = obj;

// console.log({
//   country: 'LT',
//   name: 'New country code',
//   test: -1,
//   'test4005=čęį čęėū9': 'yes',
//   ...obj,
// });


