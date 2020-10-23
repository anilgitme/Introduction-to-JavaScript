/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;

if (votingAge > 18) {
    return console.log("true");
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myName = "Anil";

let name = "anil";

if (myName === name) {
    console.log(myName);
} else {
    myName = name;
    console.log(myName);
}






//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let num = parseInt("1999"); // parseInt converts a string number to an integer
console.log(num);



//Task d: Write a function to multiply a*b 

function timesNum(a, b) {
    return a * b;
}

timesNum(2, 4);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 34;

const dogAge = function() { return myAge * 7 };

dogAge();


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


function dogFood(weight, age) { // using weight and age as the parameters for the given dog
    let food = 0.0;

    if (age >= 1.0) { // condition for dogs that are greater than or equal to 1 year
        if (weight <= 5) { // dogs that are less than or equal to 5 do this case
            food = weight * 0.05;
        } else if (weight > 5 && weight <= 10) { // if the weight is greater than 5 or less than of equal to 10 do this case
            food = weight * 0.04;
        } else if (weight > 10 && weight <= 15) { // if the weight is greater than 10 or less than or equal to 15 do this case
            food = weight * 0.03;
        } else if (weight > 15) { // finally for adult dogs if they are greater than 15 pounds do this case
            food = weight * 0.02;
        }
    } // if (age > 1.0) end loop for this case
    else {
        if (age < 2 / 12 || age <= 4 / 12) { // new if statement for puppies
            food = weight * 0.1;
        } else if (age < 4 / 12 || age <= 7 / 12) { // chose to divide the month by 12 because their is 12 months in 1 year
            food = weight * 0.05;
        } else if (age < 7 / 12 || age <= 12 / 12) { // chose to use the logical or here because  both of these conditions has to be true for this code to execute(could have used && also)
            food = weight * 0.04;
        }
    }

    return food;

}

dogFood(15, 1) /// >> 0.44999999999999996 pounds for dog 1 year
dogFood(5, .2) /// >> .5 pounds for puppy


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computerChoices = ["rock", "paper", "scissors"]
let computerNum = Math.floor(Math.random() * 3); // chose to use Math.floor here because i want the number to be 0 - 2 for the index in computersChoice array
let computerOption = computerChoices[computerNum]; // generates the index of computerChoices array from the randomly gererated number or index


function game(userPick, computerPick) { // my parameters here are the users pick entry and the computers randomly generated pick


    if (computerPick === userPick || userPick === computerPick) {
        return "Game is a tie!"
    } else if (computerPick === "rock" && userPick === "paper") {
        return "You won!"
    } else if (computerPick === "paper" && userPick === "rock") { //chose to use some logical operators to shorten the code 
        return "computer won!"
    } else if (computerPick === "paper" && userPick === "scissors") {
        return "You won!"
    } else if (computerPick === "scissors" && userPick === "paper") {
        return "computer won!"
    } else if (computerPick === "scissors" && userPick === "rock") {
        return "You won!"
    } else if (computerPick === "rock" && userPick === "scissors") {
        return "computer won!"
    }


};

let computerPick = computerOption;


game("rock", computerPick);


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmtoMiles(kilometers) {
    return kilometers / 1.609344; // 1.609344km in 1mile

}

kmtoMiles(3); // --> results in 1.86411 miles




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function cmConverter(feet) {
    return feet * 30.48; // 30.48cm in 1 feet
}

cmConverter(.5); // = 15.24cm which is half of 1 feet





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(number) {
    for (let i = number; i >= 0; i--) { // using for loop to iterate backwards with the -- to decrement and log the message each time
        console.log(i + " bottles of soda on the wall " + i + " bottles of soda, take one down pass it around " + i + " bottles of soda on the wall`")
    }

}

annoyingSong(10);





/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

const letterGrade = (number) => { //using the arrow function here

    let grade = ""; //made an empty string to return my answer
    if (number >= 90) {
        grade = "A";
    } else if (number >= 80) {
        grade = "B";
    } else if (number >= 70) {
        grade = "C";
    } else if (number >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

letterGrade(100); // >> results in A output






/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; // chose to put my lower case and uppercase vowels into my array of vowels

function countVowel(str) {

    let vowelsCount = 0; // initial count will start at 0 and will increase every a vowel is found

    for (let i = 0; i <= str.length; i++) { // Made a for loop to iterate through my string

        if (vowels.includes(str[i])) { // checking the string by index to see if its a vowel using the .include(method)
            vowelsCount++; // adding 1 to the vowelCount variable each time a vowel is found for each iteration
        }
    }

    return vowelsCount;
}

countVowel("Anil"); // ==> 2



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



let computerChoices = ["rock", "paper", "scissors"]
let computerNum = Math.floor(Math.random() * 3); // chose to use Math.floor here because i want the number to be 0 - 2 for the index in computersChoice array
computerOption = computerChoices[computerNum]; // generates the index of computerChoices from the index

let promptUser = prompt("HEY! How about some Rock, Paper, scissors!");

function game(promptUser, userPick, computerPick) { // my parameters here are the users pick entry and the computers randomly generated pick



    if (computerPick === userPick || userPick === computerPick) {
        return "Game is a tie!"
    } else if (computerPick === "rock" && userPick === "paper") {
        return "You won!"
    } else if (computerPick === "paper" && userPick === "rock") { //chose to use some logical operators to shorten the code 
        return "computer won!"
    } else if (computerPick === "paper" && userPick === "scissors") {
        return "You won!"
    } else if (computerPick === "scissors" && userPick === "paper") {
        return "computer won!"
    } else if (computerPick === "scissors" && userPick === "rock") {
        return "You won!"
    } else if (computerPick === "rock" && userPick === "scissors") {
        return "computer won!"
    }


};

let computerPick = computerOption;


game(userPrompt, "rock", computerPick);