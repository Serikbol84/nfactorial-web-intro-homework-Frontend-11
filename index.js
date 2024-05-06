// ============================== Task 1 ===================================
let ageTable = document.getElementById("age-table");
console.log("Таблица с id=age-table: ", ageTable);

let allLables = document.querySelectorAll("#age-table label");
console.log("Все элементы label: ",  allLables);

let firstTdInTable = document.querySelector("#age-table td:first-child");
console.log("Первый td: ", firstTdInTable);

let searchForm = document.querySelector('form[name="search"]');
console.log("Форма form с именем name=search: ", searchForm);

let inputs = searchForm.querySelectorAll("input"); // создаем переменную inputs, чтобы найти все input-ы в форме searchForm

let firstInputInSearchForm = inputs[0];
console.log("Первый Input в форме: ", firstInputInSearchForm);

let lastInputInSearchForm = inputs[inputs.length - 1];
console.log("Последний Input в форме: ", lastInputInSearchForm); 
//на последних двух чуть голову не сломал. Первый input более-менее лекго нашел
//там у меня было так: let firstInputInSearchForm = document.querySelector('form[name="search"] input:first-of-type'); 
//и даже просто ('form[name="search"] input') работал (кажется), а ('form[name="search"] input:last-of-type') так не работал. Почему?

// ============================== Task 2 ===================================
// let body = document.body;

// body.innerHTML = "<!--" + body.tagName + "-->";

// alert( body.firstChild.data ); // что выведет?
//alert выдает (или выводит) текст BODY 
//(не совсем понял эту тему если честно. Вижу только, что alert выдает этот текст)