// Task 1
// Practice communicating with the user via alert / confirm / prompt
// let user = {};

// user.name = prompt("Как вас зовут?");
// user.age = prompt("Сколько вам лет?");
// user.gender = confirm("Вы мужчина? Выберите 'Ок' если да, 'Отмена' если нет");

// if (user.gender === true) {
//     user.gender = "Мужчина"
// } else {
//     user.gender = "Женщина"
// }

// console.log("Имя пользователя:", user.name);
// console.log("Возраст пользователя:", user.age);
// console.log("Пол пользователя:", user.gender);

// alert("name: " + user.name + "\nage: " + user.age + "\ngender: " + user.gender);

// Task 2
// Working with operators
// let number = prompt();

// if (!isNaN(number)) {
//     alert(number) 
// }  else {
//     alert(NaN)
// }
// console.log(number); // Надеюсь, что понял условие задачи правильно

// Task 3
// Working with conditions
// let a = +prompt('a?', '');
// console.log(String(a)) // string
// a = +a
// console.log(Number(a)) // number

// switch(a) {
//     case 0:
//         alert( 0 );
//         break;  
//     case 1: 
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );
//     default: 
//         undefined;
// }

//Task 4
// Working with loops
let n = 2;
let sum = 0;
while (n<=100) {
    if(n%2 === 0) {
        // alert( `number ${n}!` );
        sum = sum + n; // or sum += n (это я для себя, все время забываю, что они идентичны)
    }
    n++;
}
console.log(sum);

