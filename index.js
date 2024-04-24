// Task 1
// function checkAge (age) {
//    return age > 18 ? true : confirm ("Родители разрешили?")
// }

function checkAge (age) {
    return age > 18 || confirm ("Родители разрешили?")
 }
 console.log(checkAge(56));


//  Task 2
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result = result * x;
    }

    return result;
}

console.log(pow(3, 3), pow(3, 2), pow(1, 100))

// Task 3 
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );