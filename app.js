let firstNumber;
let secondNumber;
let operando;

function calculadora() {
  do {
    firstNumber = Number(prompt("Entre o primeiro número"));
    if (isNaN(firstNumber) || firstNumber === 0) {
      alert("Por favor entre um número");
    }
    if (firstNumber) {
      operandor();
    }
  } while (isNaN(firstNumber) || firstNumber === 0);
}

function operandor() {
  do {
    operando = prompt(
      "Se você deseja dividir entre x , ou  + para adicionar, ou - para subtrair, ou / para dividir, ou % para porecentagem "
    );
    if (operando === "/") {
      div();
      break;
    }
    if (operando === "+") {
      add();
      break;
    }
    if (operando === "-") {
      sub();
      break;
    }
    if (operando === "x") {
      mul();
      break;
    }
    if (operando === "%") {
      dividen();
      break;
    }
  } while (
    operando === "" ||
    operando !== "/" ||
    operando !== "+" ||
    operando !== "-" ||
    operando !== "*"
  );
}
function div() {
  do {
    secondNumber = Number(prompt("Entre o segundo número"));
  } while (isNaN(secondNumber) || secondNumber === 0);
  if (secondNumber) {
    resultado = firstNumber / secondNumber;
    alert(`Resultado ${resultado}`);
  }
}

function add() {
  do {
    secondNumber = Number(prompt("Entre o segundo número"));
  } while (isNaN(secondNumber) || secondNumber === 0);
  if (secondNumber) {
    resultado = firstNumber + secondNumber;
    alert(`Resultado ${resultado}`);
  }
}
function sub() {
  do {
    secondNumber = Number(prompt("Entre o segundo número"));
  } while (isNaN(secondNumber) || secondNumber === 0);
  if (secondNumber) {
    resultado = firstNumber - secondNumber;
    alert(`Resultado ${resultado}`);
  }
}
function mul() {
  do {
    secondNumber = Number(prompt("Entre o segundo número"));
  } while (isNaN(secondNumber) || secondNumber === 0);
  if (secondNumber) {
    resultado = firstNumber * secondNumber;
    alert(`Resultado ${resultado}`);
  }
}

function dividen() {
  do {
    secondNumber = Number(prompt("Entre o segundo número"));
  } while (isNaN(secondNumber) || secondNumber === 0);
  if (secondNumber) {
    resultado = firstNumber % secondNumber;
    alert(`Resultado ${resultado}`);
  }
}

calculadora();
