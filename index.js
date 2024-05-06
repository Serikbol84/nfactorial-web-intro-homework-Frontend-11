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
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);

// alert( names ); // Вася, Петя, Маша

// ================================== Task 6 ===================================
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

  /*usersMapped = [
        { fullName: "Вася Пупкин", id: 1 },
        { fullName: "Петя Иванов", id: 2 },
        { fullName: "Маша Петрова", id: 3 }
    ]
    */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// ================================== Task 7 ===================================
let roma = { name: "Рома", age: 40 };
let natya = { name: "Настя", age: 33 };
let gena = { name: "Гена", age: 62 };

let middleAge = [ roma, natya, gena ];

function getAverageAge(users) {
    if (users.length === 0) {
        return 0;
    }
    let sum = users.reduce((total, user) => total + user.age, 0);
    return sum / users.length;
}


alert( getAverageAge(middleAge) ); // (40 + 33 + 62) / 3 = 45