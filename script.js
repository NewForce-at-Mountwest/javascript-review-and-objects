// --------------------- REVIEW OF VARIABLES --------------------------//
var myName = "Dwayne";
// console.log(myName);

// When we use var, we can reassign it to whatever we want
var myAge = 47;
myAge = "cheese";
// console.log(myAge);


//JavaScript evaluates from right to left- so this math problem evaluates to 6 and then stores the number 6 in the variable sum
var sum = 2 + 2 + 2;
// console.log("this should be 6", sum);

var mathProblem = "2 + 2 + 2";
// console.log("this is a math problem", mathProblem);

var likesPizza = true;
// console.log("does Dwayne like pizza?", likesPizza);

// ----------- With LET, you can also reassign things --------------//
let likesPizza = true;
likesPizza = false;

let myAge = 47;
myAge = "cheese";
// console.log(myAge);

// ------------------ With const, you can't reassign ------------------//
const name = "Dwayne";
name = name.toUpperCase(); // you can mutate
// console.log(name);
// name = "Fred" // can't do that!


// ------------------------------- LIGHTNING EXERCISE ------------------------------//

// 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)
var myName = "Jordan";
// 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you have
let numberOfPets;
numberOfPets = 1;
// 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)
const socialSecurity = "777-888-4385";

const bio = `${myName} has ${numberOfPets} pet(s) and their social security number is ${socialSecurity}.`;
// console.log(bio);

// ARRAYS AND LOOPS
// create a new array of favorite foods
let favoriteFoods = ["tacos", "pizza", "ice cream"];
// console.log(favoriteFoods[0]);
// console.log(favoriteFoods[1]);
// console.log(favoriteFoods[2]);

// Since we used let, you could reassign this array to be something totally different
// favoriteFoods = ["lemons", "limes"];
// favoriteFoods = "cheese"; // this is not an array! Let doesn't care.

// Push some more favorite foods into your array
favoriteFoods.push("lemons");
favoriteFoods.push("pasta");
favoriteFoods.push("steak");
favoriteFoods.push("bacon");

// But even if you use const, you can mutate the array 
// console.log("this should be favorite foods plus lemon", favoriteFoods);
// console.log(favoriteFoods.length);


// loop through the array and print each one to the console
// i = i + 1 is the same thing as i++
// that's why you gotta use let instead of const to declare i- because you reassign it when you increment 
// for (let i = 0; i < favoriteFoods.length; i = i + 1) {
//   console.log("inside the loop", i);
//   console.log(favoriteFoods[i]);
// }



//------------------------------- LIGHTNING EXERCISE-----------------------// 

// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.
const petNames = ["Hoagie", "Sophie", "Chester", "Henry"];

// 2. Loop through your `petNames` array and log each pet's name to the console.
const myRealPet = "Hoagie";
// for(let i = 0; i < petNames.length; i++){
//     if(petNames[i] === "Hoagie"){
//         console.log("That's my real pet!", petNames[i]);
//     }
//     console.log("this is i", i);
//     console.log(petNames[i]);
// }


//--------------------------------------- CONDITIONALS ------------------//
// const hasPets = false;
// if(hasPets){
//     alert("What are your pet's names?");
// } else {
//     alert("You should get some pets.");
// }

// const age = 22;
// const isCitizen = true;

// if(age>=21){
//     console.log("you can drink!")
// }

// if(age>=18){
//     console.log("you can vote!");
//     if(age >=21){
//         console.log("you can also drink!");
//     }
// }

// if(age >= 21 && isCitizen === true){
//     console.log("You can drink and vote at the same time!"); 
// } else if (age >= 18 && isCitizen === true) {
//     console.log("You can vote but not drink!");
// } else if (age > 100 && isCitizen === false){
//     console.log("good for you");
// } else {
//     console.log("you can't do anything fun.")
// }


// -------------------------------LIGHTNING EXERCISE ---------------------//
// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.
// 2. Loop through the array and log each food to the console
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodles, you should log "Heck yeah!! Noodles!" to the console.
// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp

const favoriteFoods = ["sushi", "PASTAAAAA", "curry", "hamburgers"];

// for(let i = 0; i < favoriteFoods.length; i++){
//     if(favoriteFoods[i] === "noodles" || favoriteFoods[i] === "Noodles" || favoriteFoods[i] === "PASTAAAAA"){
//         console.log("Heck yeah!! Noodles!!!");
//     } else {
//         console.log(favoriteFoods[i]);
//     }
    
// }

// ------------------------------------ OBJECTS -------------------------//

// Objects to represent people and things in a coffee shop (barista, cup of coffee, customer, etc)

// Object that represents an item on the menu
const cupOfCoffee = {
    price: 1.99,
    size: "16oz",
    ingredients: ["beans", "water"],
    inStock: true
}

// Object that represents a customer
const sable = {
    name: "Sable",
    regularOrder: "Latte",
    methodOfPayment: "Visa",
    birthday: "June 10",
    pastOrders: ["Latte with almond milk", "Latte with soy milk"],
    isCustomer: true
}

console.log(sable.pastOrders);

const orderArray = sable.pastOrders;

// Loop through the customer's past orders and print each one to the console
for(let i = 0; i < orderArray.length; i++){
    console.log(orderArray[i])
}

// Object that represents an employee
const david = {
    name: "David",
    startDate: "1/10/17",
    fullTime: true,
    pay: "600,000/ year",
    isCustomer: false
}

// Another employee object
const joey = {
    name: "Joey",
    startDate: "1/10/17",
    fullTime: true,
    pay: "600,000/ year",
    isCustomer: false
}

// Array of employee objects using variables
// const coffeeShopEmployees = [david, joey];

// Array of employee objects using anonymous objects (this is the same thig as the line above)
const coffeeShopEmployees = [
    {
        name: "Joey",
        startDate: "1/10/17",
        fullTime: true,
        pay: "600,000/ year",
        isCustomer: false
    },
    {
        name: "David",
        startDate: "1/10/17",
        fullTime: true,
        pay: "600,000/ year",
        isCustomer: false
    } 
]

// console.log(coffeeShopEmployees);

// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.
const fordMustang = {
    year: 2015,
    color: "red"
}

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = ["Kippers", "Jack", "Gypsy"];

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
const mother = {
    name: "May",
    age: 40,
    hairColor: "brown"
}

const sister = {
    name: "Ella",
    age: 20,
    hairColor: "brown"
}

// DOT NOTATION for accessing properties inside objects
console.log(sister.name);
console.log(sister.age);

// BRACKET NOTATION does the same thing with different syntax
const keyToLookUp = "hairColor";

// This won't work because the value of keyToLookUp is a string
// sister.keyToLookUp
// sister."hairColor"

// This will work:
console.log(sister[keyToLookUp]);
// console.log(sister.hairColor);

const familyMembers = [mother, sister];
// const familyObject = {
//     motherObject: mother,
//     sisterObject: sister
// }
// console.log(familyMembers);

// console.log(familyMembers[0].name);

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents)
console.log(wardrobe.depth, wardrobe.width);


// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

const dimensions = `${empireStateBuilding.height} by ${empireStateBuilding.eastWestLength} by ${empireStateBuilding.northSouthLength}`
console.log(dimensions);

const keyForStories = "stories";
const keyForAddress = "address";
const keyForOwner = "monkies";

// These are all exactly the same
console.log(empireStateBuilding[keyForStories]);
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding["stories"]);
// console.log(empireStateBuilding[keyForOwner]); // this will look inside the object for a key called "monkies". It won't find one, so it'll give you an undefined value back.



// -------------------------------------------------- LIGHTNING EXERCISE --------------------------------



// LIGHTNING EXERCISE
// Lightning Exercise 1: Output the names of the instructors to the console.
// Lightning Exercise 2: Output the names of the career advisors to the console.
const newForce = {
    founded: 2018,
    instructors: {
        fullTime: ["Jordan", "Josh", "Kim"],
    },
    careerAdvisors: ["Natalie", "Kinsey"],
    address: "1000 5th Ave, Huntington, WV 25701"
}

console.log("This is the instructors obj", newForce.instructors.fullTime);
const instructorArray = newForce.instructors.fullTime;
console.log("this is the [1.5]", instructorArray[1.5])
for(let i=0; i< instructorArray.length; i++){
    console.log(instructorArray[i]);
}

const careerAdvisorArray = newForce.careerAdvisors;
for(let i=0; i < careerAdvisorArray.length; i++){
    console.log("this is a career advisor", careerAdvisorArray[i])
}