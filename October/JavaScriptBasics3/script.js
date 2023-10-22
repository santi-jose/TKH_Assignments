function GiveMeResult() {
  // get firstOperand element from html
  let firstOperand = Number(document.getElementById("firstOperand").value);

  // get operator element from html
  let operator = document.getElementById("operators").value;

  // get secondOperand element from html
  let secondOperand = Number(document.getElementById("secondOperand").value);

  // get result span element from html
  let resultSpan = document.getElementById("result");

  switch (operator){
    case ">":
      console.log("Greater Than");
      if(firstOperand > secondOperand){
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
        is greater than 
        Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }else{
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
          is not greater than 
          Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }
      break;

    case "<":
      console.log("Less Than");
      if(firstOperand < secondOperand){
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
          is less than 
          Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }else{
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
          is not less than 
          Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }
      break;

    case "!=":
      console.log("Not Equals");
      if(firstOperand != secondOperand){
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
          is not equal to 
          Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }else{
        resultSpan.innerText = `Data: ${firstOperand}, type: ${typeof(firstOperand)}
          is equal to 
          Data: ${secondOperand}, type: ${typeof(secondOperand)}`;
      }
      break;

    default:
      console.log("No operator found!");

  }
}

let button = document.getElementById("calculate");
button.addEventListener("click", GiveMeResult);
