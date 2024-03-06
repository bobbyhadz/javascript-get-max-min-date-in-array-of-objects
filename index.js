// EXAMPLE 1 - Get the Max/Min Date in an Array of Objects in JavaScript

const arr = [
  {date: '2022-11-14T04:55:31.820Z'},
  {date: '2022-09-24T07:25:31.820Z'},
  {date: '2025-07-17T07:25:31.820Z'},
];

// ✅ Get Max date
const maxDate = new Date(
  Math.max(
    ...arr.map(element => {
      return new Date(element.date);
    }),
  ),
);

// 👇️ Thu Jul 17 2022
console.log(maxDate);

// ✅ Get Min date
const minDate = new Date(
  Math.min(
    ...arr.map(element => {
      return new Date(element.date);
    }),
  ),
);

// 👇️ Sat Sep 24 2022
console.log(minDate);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Min/Max Dates in an Array in JavaScript

// const arr = [
//   new Date('2022-11-14'),
//   new Date('2022-09-24'),
//   new Date('2025-07-17'),
// ];

// const min = new Date(Math.min(...arr));
// console.log(min); // 👉️ Sat Sep 24 2022

// const max = new Date(Math.max(...arr));
// console.log(max); // 👉️ Thu Jul 17 2025
