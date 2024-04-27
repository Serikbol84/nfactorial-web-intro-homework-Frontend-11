// ============================== Task 1 ===================================
// function checkAge (age) {
//    return age > 18 ? true : confirm ("Родители разрешили?")
// }

function checkAge (age) {
  return age > 18 || confirm ("Родители разрешили?")
}
console.log(checkAge(56));

// ================================= Task 2 ===================================
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = result * x; // or result *= x;
  }
  return result;
}

console.log(pow(3, 3), pow(3, 2), pow(1, 100))

// ================================== Task 3 ===================================
const ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}
// const ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask (
  // "Вы согласны?",
  // () => alert("Вы согласились."),
  // () => alert("Вы отменили выполнение."),
// );  // Закоментил, чтобы не мешал

// ================================== Task 4 ===================================
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => a - b);

// alert(arr); // 8, 5, 2, 1, -10

// ================================== Task 5 ===================================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

// alert( names ); // Вася, Петя, Маша
