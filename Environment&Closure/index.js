// **Лексичне середовище**
// У прикладах нижче вам треба описати що поверне та чи інша функція і яким чином це працює


// let name = "Іван";

// function sayHi() {
//   alert("Привіт, " + name);
// }

// name = "Петро";

// sayHi(); // що вона покаже "Іван" чи "Петро"?

// =====================================
// function outerFunction() {
//   let outerVar = "Outer";

//   function innerFunction() {
//     let innerVar = "Inner";
//     console.log(outerVar + " " + innerVar);
//   }

//   innerFunction();
// }

// outerFunction();
// ====================================
// function createCounter() {
//   let count = 0;

//   return function() {
//     return ++count;
//   };
// }

// let counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// ====================================
// function outer() {
//   let a = 1;

//   function inner() {
//     let b = 2;
//     console.log(a + b);
//   }

//   inner();
//   console.log(a);
// }

// outer();
// ==============================
// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// let addFive = add(5);
// console.log(addFive(3));

// ==========================


// **Замикання**
// Створіть функцію createCounter, яка повертає об'єкт з методами increment та decrement. При кожному виклику increment збільшує лічильник на 1, а decrement зменшує на 1. Початкове значення лічильника - 0.

// Створіть функцію createSecretHolder, яка приймає початкове значення та повертає об'єкт з двома методами: getSecret та setSecret. Значення, що зберігається в об'єкті, повинно бути приватним і доступним тільки через ці методи.

// Напишіть функцію sequenceGenerator, яка приймає початкове значення та крок і повертає функцію, яка при кожному виклику повертає наступне значення послідовності (починаючи з початкового значення і збільшуючи на крок).Наприклад:
//  const queueMaker=sequenceGenerator(1,4)
// queueMaker() //  => [1,5]
// queueMaker() //  => [1,5,9]
// queueMaker() //  => [1,5,9,13]