var titleElement = document.getElementById("title");

console.log(titleElement);

titleElement.style.color = "blue";

var listItems = document.getElementsByTagName('li');

console.log(listItems);
//listItems.style.color = "red";

for(var i = 0; i < listItems.length; i++){
  if (listItems[i].innerHTML == "item 1") {
    listItems[i].style.color = "green";
    listItems[i].innerHTML = "Changed Item"
  }
}

listItems[1].style.color = "red";
var num = 0;

titleElement.addEventListener("click", function() {
  console.log("element is clicked");

  if (num % 2 == 0){
    titleElement.style.color = "blue";
  } else {
    titleElement.style.color = "red";
  }
  num++;
})

titleElement.addEventListener("mouseout", function(){
  titleElement.style.color = "orange";
})

// ------
// ------
// Calulator Code:

var firstNumber = "";

var operator = null;
var operator2 = null;

var secondNumber = "";

var buttons = document.getElementsByClassName('button');
var screen = document.getElementById('screen');


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    if(buttons[i].innerText == "AC"){
      firstNumber = "";
      operator = null;
      secondNumber = "";
      screen.innerText = 0;
    } else {
      screen.innerText = buttons[i].innerText;
      if((!firstNumber) || ((buttons[i].innerText == "0") && !secondNumber) || (parseInt(buttons[i].innerText) && !secondNumber && !operator)) {
        firstNumber += buttons[i].innerText;
        screen.innerText = firstNumber;
      } else if(!operator) {
        operator = buttons[i].innerText;
      } else if (parseInt(buttons[i].innerText) || buttons[i].innerText == "0"){
        secondNumber += buttons[i].innerText;
        screen.innerText = secondNumber;
      }
    }
  })

  function calculateResult() {
    if(secondNumber != null){
      if (operator == "+"){
        result = parseInt(firstNumber) + parseInt(secondNumber);
      } else if (operator == "-"){
        result = parseInt(firstNumber) - parseInt(secondNumber);
      } else if (operator == "x"){
        result = parseInt(firstNumber) * parseInt(secondNumber);
      } else if (operator == "/"){
        result = parseInt(firstNumber) / parseInt(secondNumber);
      } else if (operator == "%"){
        result = parseInt(firstNumber) % parseInt(secondNumber);
      }

      screen.innerText = result;
    }
  }

  if(buttons[i].innerText == "="){
    buttons[i].addEventListener('click', calculateResult);
  }

}
