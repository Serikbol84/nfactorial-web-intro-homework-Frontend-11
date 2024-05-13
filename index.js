//=================================== Task 1 ===========================================
// let button = document.getElementById ("hider"); 

// button.addEventListener("click", function () {
//     let hideText = document.getElementById("text");
//     hideText.style.display = "none";
// });

//=================================== Task 2 ===========================================
//let button = document.getElementById("alert")

//button.addEventListener("click", () => alert("1")); // Запустится этот обработчик и выведет сообщение "1";

//button.removeEventListener("click", () => alert("1")); // Игнорируется, потому-что тут другая функция, хотя с таким же именем

//button.onclick = () => alert(2); // Запустится этот обработчик и выведет сообщение "2";

// Короче ответ 1 и 2.

//=================================== Task 3 ===========================================
const message = document.querySelectorAll('.pane');

message.forEach(function(pane) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    const closeButton = pane.querySelector('.remove-button');
    closeButton.style.float = 'right';
  
    closeButton.addEventListener('click', () => {
        pane.style.display = 'none';
    });
});

