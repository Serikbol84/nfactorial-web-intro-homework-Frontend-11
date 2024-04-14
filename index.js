//Task 1

// 1) Use let, const
const myRestourant = "Red Lobster";
let shop = "Sea Foods";
const myFootballTeam = "Kaysar";

console.log("Restoraunt name:", myRestourant);
console.log("Shop name:", shop);
console.log("My football team name:", myFootballTeam);

// 2) data types - string, number, boolean, null, undefined
let restourant = "Fish Basket";
let capacity = 75;
let isOpen = true;
let country = null;
let city;

console.log("Ресторан:", restourant, "Вместимость:", capacity, "Открыто:", isOpen, "Страна:", country, "Город:", city);

const FootballTeam = "Kayrat";
let countOfPlayers = 22;
let isChampion = false;
let worldChampionship = null;
let leadership;

console.log(FootballTeam, countOfPlayers, isChampion, worldChampionship, leadership);

const shop1 = "Talgatbek";
let countOfSellers = 2;
let isBig = false;
let sporting_goods = null;
let salary;

console.log(shop1, countOfSellers, isBig, sporting_goods, salary);

// 3) Objects - create, add and delete properties
let cafe = {
    name: "Myata",
    waiters: 10,
    cheaf: "Azat",
}
console.log(cafe);

cafe.location = "Almaty";
cafe["street"] = "Al'Farabi";
console.log(cafe);

delete cafe.cheaf;
delete cafe["waiters"];
console.log(cafe);

let football = {
    nameOfTeam: "Kaysar",
    players: 30,
    teamLeader: "Aslan",
}
console.log(football);

football.legioner = "Mbappe";
football["legioner1"] = "Maradonna";
console.log(football);

delete football.legioner;
delete football["players"];
console.log(football);  // далее в том же духе))

// Task 2 Working with objects

// 1) create empty object named "vehicle"
let vehicle = {

}
// 2) add brandName
vehicle.brandName = "BMW";
console.log(vehicle);
// 3) add model
vehicle.model = "X5";
console.log(vehicle);
// change the model
vehicle.model = "M1";
console.log(vehicle);
// delete model
delete vehicle.model;
console.log(vehicle);

// Task 3 Working with property enumeration in objects

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
    // or sum += salaries[key];
}

console.log("Total sum of salaries is:", sum);