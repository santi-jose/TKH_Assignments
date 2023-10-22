

function GiveMeResult() {
  // get firstOperand element from html
  let firstOperand = Number(document.getElementById("firstOperand").value);

  // get operator element from html
  let operator = document.getElementById("operators").value;
  
  // get secondOperand element from html
  let secondOperand = Number(document.getElementById("secondOperand").value);

  // get result span element from html
  let resultSpan = document.getElementById("result");

  // initialize result number to null
  let resultNum = null;

  switch (operator){
    case "+":
      console.log("Addition");
      resultNum = firstOperand + secondOperand;
      resultSpan.innerText = `${firstOperand} + ${secondOperand} = ${resultNum}`;
      break;
      
    case "-":
      console.log("Subtraction");
      resultNum = firstOperand - secondOperand;
      resultSpan.innerText = `${firstOperand} - ${secondOperand} = ${resultNum}`;
      break;
      
    case "*":
      console.log("Multiplication");
      resultNum = firstOperand * secondOperand;
      resultSpan.innerText = `${firstOperand} * ${secondOperand} = ${resultNum}`;
      break;

    case "/":
      console.log("Division");
      resultNum = firstOperand / secondOperand;
      resultSpan.innerText = `${firstOperand} / ${secondOperand} = ${resultNum}`;
      break;

    case "%":
      console.log("Modulus");  
      resultNum = firstOperand % secondOperand;
      resultSpan.innerText = `${firstOperand} % ${secondOperand} = ${resultNum}`;
      break;

    case "**":
      console.log("Exponentiation");
      resultNum = firstOperand ** secondOperand;
      resultSpan.innerText = `${firstOperand} ** ${secondOperand} = ${resultNum}`;
      break;
      
    default:
      console.log("No operator found!");
      
  }
}

let button = document.getElementById("calculate");
button.addEventListener("click", GiveMeResult);
