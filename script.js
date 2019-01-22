// REVIEW OF VARIABLES
// var
// var myName = "Dwayne";
// console.log(myName);

// var myAge = 47;
// // myAge = "cheese";
// console.log(myAge);

// var sum = 2 + 2 + 2;
// console.log("this should be 6", sum);

// var mathProblem = "2 + 2 + 2";
// console.log("this is a math problem", mathProblem);

// var likesPizza = true;
// console.log("does Dwayne like pizza?", likesPizza);

// // let
// let likesPizza = true;
// likesPizza = false;

// let myAge = 47;
// myAge = "cheese";
// console.log(myAge);

// // const
// const name = "Dwayne";
// name = name.toUpperCase();
// console.log(name);
// // strings, numbers, booleans

// LIGHTNING EXERCISE

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

// If you used let, you could reassign this array to be something totally different
// favoriteFoods = ["lemons", "limes"];
// favoriteFoods = "cheese";

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
// that's why you gotta use let instead of const to declare i
// for (let i = 0; i < favoriteFoods.length; i = i + 1) {
//   console.log("inside the loop", i);
//   console.log(favoriteFoods[i]);
// }
// check to see if the favorite food is Pizza- if so, print "heck yeah, pizza!!" to the console



// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.
const petNames = ["Hoagie", "Sophie", "Chester", "Henry"];

// 2. Loop through your `petNames` array and log each pet's name to the console.
const myRealPet = "Hoagie";
for(let i = 0; i < petNames.length; i++){
    if(petNames[i] === "Hoagie"){
        console.log("That's my real pet!", petNames[i]);
    }
    console.log("this is i", i);
    console.log(petNames[i]);
}

// CONDITIONALS
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











// OBJECTS

// Objects to represent people and things in a coffee shop (barista, cup of coffee, customer, etc)

// Arrays represent collections of things where you don't need to know anything else about them. (Ingredients, customer names, etc.)

// LIGHTNING EXERCISE

// Access the properties inside an array with brakcet notation
// Access properties in an object with dot notation
// OR access the properties inside an object with bracket notation

// Bracket notation is generally used when we have a string stored in a variable that corresponds to a key in the object

// In the family array example, we might start with:
// const keyToLookUp = "name";

// LIGHTNING EXERCISE

// const kennel = {
//   name: "Nashville North Kennels",
//   address: "100 Demonbreun Road",
//   manager: "Harper Frankstone",
//   capacity: 50,
//   currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
// }

// Loop through the current animals at the kennel

// LIGHTNING EXERCISE
