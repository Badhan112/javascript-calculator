const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const currentOperand = document.getElementById("current-operand");
const previousOperand = document.getElementById("previous-operand");
const operatorOutput = document.getElementById("operator-output");

let previousOperandNumber;
let currentOperandNumber;
let answer;


for(let number of numbers){
    number.addEventListener("click", function(){
        currentOperand.innerText += number.innerText;
    });
}

for(let operator of operators){
    operator.addEventListener("click", function(){
        if(currentOperand.innerText != "" && previousOperand.innerText != ""){
            firstOperand = parseFloat(previousOperand.innerText);
            secondOperand = parseFloat(currentOperand.innerText);

            if(operatorOutput.innerText == '+'){
                answer = firstOperand + secondOperand;
            }
            else if(operatorOutput.innerText == '-'){
                answer = firstOperand - secondOperand;
            }
            else if(operatorOutput.innerText == '*'){
                answer = firstOperand * secondOperand;
            }
            else if(operatorOutput.innerText == '/'){
                answer = firstOperand / secondOperand;
            }

            previousOperand.innerText = answer;
            currentOperand.innerText = '';
            operatorOutput.innerText = operator.innerText;
        }
        else if(currentOperand.innerText != ""){
            operatorOutput.innerText = operator.innerText;
            previousOperand.innerText = currentOperand.innerText;
            currentOperand.innerText = '';
        }
        else if(currentOperand.innerText == "" && previousOperand.innerText != ""){
            operatorOutput.innerText = operator.innerText;
        }
    });
}

document.getElementById("ac").addEventListener("click", function(){
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    operatorOutput.innerText = '';
});

document.getElementById("del").addEventListener("click", function(){
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
});

document.getElementById("answer").addEventListener("click", function(){
    firstOperand = parseFloat(previousOperand.innerText);
    secondOperand = parseFloat(currentOperand.innerText);

    if(operatorOutput.innerText == '+'){
        answer = firstOperand + secondOperand;
    }
    else if(operatorOutput.innerText == '-'){
        answer = firstOperand - secondOperand;
    }
    else if(operatorOutput.innerText == '*'){
        answer = firstOperand * secondOperand;
    }
    else if(operatorOutput.innerText == '/'){
        answer = firstOperand / secondOperand;
    }

    currentOperand.innerText = answer;
    previousOperand.innerText = '';
    operatorOutput.innerText = '';
})