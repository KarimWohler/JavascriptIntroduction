// Basic Variables

var name = "Karim";
//debugger
var surname = "Wohler";
var number = 3;
var numberString = "4";

console.log(name + " " + surname + " is " + numberString*6);


// Functions
console.log(addNumbers("Steve ","James"));
console.log(addNumbers(1, 2)); // Doesnt need to be ordered in order to works.
                              // Javascript re-orders the code by frontloading all the functions first
                              // However, this is bad practice

function addNumbers(num1, num2) {
  var result = num1 + num2;
  return result;
}

// Functions Exercise
var answer = addNumbers(addNumbers(5,7), addNumbers(addNumbers(2,10), 2));
console.log(answer);


// Data Types

  // String
  var string = "Hello" // Single or double quotes, it doesnt matter
  console.log("String: " + String);

    // Get Length
    console.log("Length of string: " + string.length);

    // Index of Characters
    console.log(string.indexOf('e')); // Index starts at 0

    // Substring
    console.log(string.substr(2,4));

  // Numbers
  var myNumber = 5;
  var myOtherNumber = 5.5;
  var myExponentialNumber = 123e5;

  console.log(myNumber);
  console.log(myOtherNumber);
  console.log(myExponentialNumber);

    // Modulus
    console.log(myNumber % 2);

  // Boolean
  var booltrue = true;
  var boolfalse = false;

  console.log(booltrue);
  console.log(boolfalse);



  // Arrays

  // function unknown() {
  //     // console.log("unknown");
  //     return "A function";
  // }

  var myArray = [5, 6, 7, "a", "b", "unknown"];

  console.log(myArray);
  console.log(myArray[5]);

    // length of Array
    console.log(myArray.length);

    // Reassigning values in an array
    myArray[0] = 8;
    console.log(myArray);

    console.log(myArray + ["more", "stuff"]);

    console.log(myArray);

    console.log(myArray += [,"more", "stuff"]);

  // Type Coercion
  var myString = "5" * "7";
  var mynumber2 = 3;
  var mynumber3 = "12";
  var mydecnumber = "2.5";

  console.log(mynumber2 + mynumber2 + myString);
  console.log(myString);
  console.log(parseInt(mynumber3) + mynumber2);
  console.log(parseFloat(mydecnumber) + mynumber2);
  console.log(parseInt(mydecnumber) + mynumber2);


  // Control Flow
  var money_in_my_pocket = prompt("How much money do you have?");

  if(money_in_my_pocket > 10){
    console.log("Another Drink Please");
  } else {
    console.log("Time to go home");
  }

// Weird OR & AND
var name = prompt("What is your name?") || "Captain No-name";
console.log("Hello " + name);

// Loops
  // While
  var x = 0;
  while (x < 5) {
    console.log("While");
    x++;
  }

  // For Loops
  var array = [1,2,3,4,5,6,7,8,9];
  for(var i = 0; i < array.length; i++){
    console.log("For");
  }

  // do while
  do {
    console.log("Do");
  } while (x > 100);


  // for in
  var obj = {
    name: "Richard",
    age: 12,
    school: "Bromsgrove"
    exam_results: {
      maths: true
    }
  }

  for (var key in obj){
    console.log(key);
    console.log(obj[key]);
  }


  // Scope
  // Lexical Scope
  // "Code can see out but can't see in (function)"

  var outsideVariable = 5;

  function doSomething() {
    variable = 10; // if it cant find the global variable, it will create one.
    console.log(outsideVariable);
  }

  doSomething();


  // DOM - Document Object Model
  
