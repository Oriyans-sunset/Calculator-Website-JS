const input1 = document.getElementById("value1");
const input2 = document.getElementById("value2");
const button_plus = document.getElementById("plus-button");
const button_minus = document.getElementById("minus-button");
const button_multiply = document.getElementById("multiply-button");
const button_divide = document.getElementById("divide-button");
const reset_button = document.getElementById("reset-button");
const answer_heading = document.getElementById("answer");
const radio_round = document.getElementById("radio_btn1");
const radio_DONTround = document.getElementById("radio_btn2");

let answer;

button_plus.addEventListener("click", add);
function add(){
  let first_number = input1.value;
  let second_number = input2.value;
  answer = Number(first_number) + Number(second_number);
  answer_heading.innerHTML = answer;
}
button_minus.addEventListener("click", minus);
function minus(){
  let first_number = input1.value;
  let second_number = input2.value;
  answer = Number(first_number) - Number(second_number);
  answer_heading.innerHTML = answer;
}
button_multiply.addEventListener("click", multiply);
function multiply(){
  let first_number = input1.value;
  let second_number = input2.value;
  answer = Number(first_number) * Number(second_number);
  answer_heading.innerHTML = answer;
}
button_divide.addEventListener("click", divide);
function divide(){
  let first_number = input1.value;
  let second_number = input2.value;
  answer = Number(first_number) / Number(second_number);

  if(radio_round.checked === true ){
    answer_heading.innerHTML = (Math.round(answer*10000))/10000;
  }
  if(radio_DONTround.checked === true){
    answer_heading.innerHTML = (Math.round(answer*100000000))/100000000;
  }
  if(radio_DONTround.checked === false && radio_round.checked === false){
    answer_heading.innerHTML = (Math.round(answer*100000000))/100000000;
  }
}
reset_button.addEventListener("click", resetStuff);
function resetStuff(){
  setTimeout(function(){
    alert("Calculator Reseted");
  }, 50);
  answer_heading.innerHTML = ("ANSWER");
}
