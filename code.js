// function equals() {
//   document.getElementById("numbersdisplay").innerHTML = a + b;
// }

// function display(number) {
//   document.getElementById("numbersdisplay").innerHTML += number;
// }
function cleardisplay() {
  document.getElementById("numbersdisplay1").innerHTML = "";
  document.getElementById("numbersdisplay2").innerHTML = "";
  document.getElementById("numbersanswer").innerHTML = "";
}

// -----------------------------------------------------

let whichDis = 1;
function displaynum(disNumber) {
  document.getElementById("numbersanswer").innerHTML = "";

  if (disNumber == 1) {
    document.getElementById("status").innerHTML = "number 1";
    return (whichDis = 1);
  } else if (disNumber == 2) {
    document.getElementById("status").innerHTML = "number 2";
    return (whichDis = 2);
  }
}

function display(number) {
  document.getElementById("numbersanswer").innerHTML = "";

  if (whichDis == 1) {
    document.getElementById("numbersdisplay1").innerHTML += number;
  } else {
    document.getElementById("numbersdisplay2").innerHTML += number;
  }
}

function op(operator) {
  let Number1 = parseInt(document.getElementById("numbersdisplay1").innerText);
  let Number2 = parseInt(document.getElementById("numbersdisplay2").innerText);

  if (operator == "+") {
    document.getElementById("numbersanswer").innerHTML = (
      Number1 + Number2
    ).toString();
  } else if (operator == "-") {
    document.getElementById("numbersanswer").innerHTML = (
      Number1 - Number2
    ).toString();
  } else if (operator == "*") {
    document.getElementById("numbersanswer").innerHTML = (
      Number1 * Number2
    ).toString();
  } else if (operator == "/") {
    document.getElementById("numbersanswer").innerHTML = (
      Number1 / Number2
    ).toString();
  }
}
