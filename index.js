var resultDisplay = document.getElementById("result");
var num1 = 0;
var num2 = 0;
var result = 0;
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var btn5 = document.getElementById("btn-5");
var btn6 = document.getElementById("btn-6");
var btn7 = document.getElementById("btn-7");
var btn8 = document.getElementById("btn-8");
var btn9 = document.getElementById("btn-9");
var btn0 = document.getElementById("btn-0");
var btnadd = document.getElementById("add-btn");
var btnsub = document.getElementById("sub-btn");
var btnmult = document.getElementById("mult-btn");
var btndiv = document.getElementById("div-btn");
var btnequal = document.getElementById("equal-btn");
var btndebug = document.getElementById("debug-btn");
var operator = "";
var pressedOperator = false;

btn1.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "1";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "1";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn2.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "2";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "2";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn3.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "3";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "3";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn4.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "4";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "4";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn5.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "5";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "5";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn6.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "6";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "6";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn7.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "7";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "7";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn8.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "8";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "8";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn9.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "9";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "9";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btn0.addEventListener("click", () => {
  if (!pressedOperator) {
    num1 += "0";
    resultDisplay.innerHTML = parseInt(num1);
  } else {
    num2 += "0";
    resultDisplay.innerHTML = parseInt(num2);
  }
});
btnadd.addEventListener("click", () => {
  pressedOperator = true;
  operator = "+";

  resultDisplay.innerHTML = num2;
});
btnsub.addEventListener("click", () => {
  pressedOperator = true;
  operator = "-";

  resultDisplay.innerHTML = num2;
});
btnmult.addEventListener("click", () => {
  pressedOperator = true;
  operator = "x";

  resultDisplay.innerHTML = num2;
});
btndiv.addEventListener("click", () => {
  pressedOperator = true;
  operator = "/";

  resultDisplay.innerHTML = num2;
});
btnequal.addEventListener("click", () => {
  if (operator == "+") {
    result = parseInt(num1) + parseInt(num2);
    resultDisplay.innerHTML = result;
    num1 = 0;
    num2 = 0;
    pressedOperator = false;
  } else if (operator == "-") {
    result = parseInt(num1) - parseInt(num2);
    resultDisplay.innerHTML = result;
    num1 = 0;
    num2 = 0;
    pressedOperator = false;
  } else if (operator == "x") {
    result = parseInt(num1) * parseInt(num2);
    resultDisplay.innerHTML = result;
    num1 = 0;
    num2 = 0;
    pressedOperator = false;
  } else if (operator == "/") {
    result = parseInt(num1) / parseInt(num2);
    resultDisplay.innerHTML = result;
    num1 = 0;
    num2 = 0;
    pressedOperator = false;
  }
  else {
    result = "ERROR"
    resultDisplay.innerHTML = result
    num1 = 0;
    num2 = 0;
    pressedOperator = false;
  }
});

btndebug.addEventListener("click", () => {
  console.log(
    "num1 = " + num1,
    "; num2 = " + num2,
    "; pressedOperator = " + pressedOperator,
    "; operator = " + operator,
    "; result = " + result
  );
});
