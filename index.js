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

let num = parseInt("1999");
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


function dogFood(weight, age) {
    let food = 0.0;
    if (age >= 1.0) {
        if (weight <= 5) {
            food = weight * 0.05;
        } else if (weight > 5 && weight <= 10) {
            food = weight * 0.04;
        } else if (weight > 10 && weight <= 15) {
            food = weight * 0.03;
        } else if (weight > 15) {
            food = weight * 0.02;
        }
    } // if (age > 1.0) end loop for this case
    else {
        if (weight > 2 / 12 && weight <= 4 / 12) {
            food = weight * 0.1;
        } else if (weight > 4 / 12 && weight <= 7 / 12) {
            food = weight * 0.05;
        } else if (weight > 7 / 12 && weight <= 12 / 12) {
            food = weight * 0.04;
        }
    }

    return food;

}
dogFood(15, 1)


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computerChoices = ["rock", "paper", "sissors"]
let computerNum = Math.floor(Math.random() * 3);
computerOption = computerChoices[computerNum];




function game(userPick, computerPick) {




    if (computerPick === userPick) {
        return "Game is a tie!"
    } else if (computerPick === "rock" && userPick === "paper") {
        return "You won!"
    } else if (computerPick === "paper" && userPick === "rock") {
        return "computer won!"
    } else if (computerPick === "paper" && userPick === "sissors") {
        return "You won!"
    } else if (computerPick === "sissors" && userPick === "paper") {
        return "computer won!"
    } else if (computerPick === "sissors" && userPick === "rock") {
        return "You won!"
    } else if (computerPick === "rock" && userPick === "sissors") {
        return "computer won!"
    }


};

let computerPick = computerOption;


game("rock", computerPick);


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmtoMiles(kilometers) {
    return kilometers / 1.609344; // 1.609344km is 1miles

}


kmtoMiles(3); // --> 1.86411 miles


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters





/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(number) {
    for (let i = number; i >= 0; i--) { // using for loop to iterate backwards with the -- to decrement and log the message each time
        console.log(i + " bottles of soda on the wall " + i + " bottles of soda, take one down pass it around " + i + " bottles of soda on the wall`")
    }

}

annoyingSong(10, 4)



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function letterGrade(number) {

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

letterGrade();




/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object