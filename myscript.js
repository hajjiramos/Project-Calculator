//-- Functions Basic Math Operations --//
    function add(num1, num2) {
        return num1+num2;
    }
    function subtract(num1, num2) {
        return num1-num2;
        
    }
    function multiply(num1, num2) {
        return num1*num2;
    }
    function divide(num1, num2) {
        return num1/num2;
    }



let num1= '';
let num2= '';
let operator='';
let result ='';

//-- Function to Operate the Calculator --//

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let operation;
   
    switch (operator) {
        case "+":
            operation = add(num1, num2);
            break;
        case "-":
            operation = subtract(num1, num2);
            break;
        case "x":
            operation = multiply(num1, num2);
            break;
        case "÷":
            operation = divide(num1, num2);
            break;         
    }
    if (operation == Infinity) {
        return "ERROR";
    }

   if (!Number.isInteger(operation)){
        return parseFloat(operation.toFixed(5));
    }
    else {
        return operation;
    }
   
}


//-- Function clicking Number Buttons --//

const display = document.getElementById("display");
   
const btnNumber = document.querySelectorAll('#btnNumber');
    btnNumber.forEach(numberBtn => numberBtn.addEventListener('click', () => {
        if (!operator){
           if(numberBtn.textContent === '.') {
                disableDecimal();
                num1 +='.';              
            }
            else if (num1.includes('.')) {
                disableDecimal();
                num1 +=numberBtn.textContent;
            }
            else {
                num1 +=numberBtn.textContent;       
            }
            display.value = num1;
           
        }
        else {
            if(numberBtn.textContent === '.') {
                num2 += '.';
                disableDecimal();
            }
            else if (num2.includes('.')) {
                disableDecimal();
                num2 +=numberBtn.textContent;
            }
            else {
               num2 +=numberBtn.textContent;
            }
            display.value = num2;
        }
       }));


//-- Function clicking Operator Buttons --//
const btnOperator = document.querySelectorAll('#btnOperator');
    btnOperator.forEach(operatorBtn => operatorBtn.addEventListener('click', () => {
        enableDecimal();
        if (!num1){
            num1 = result;
            display.value = num1;
            operator = operatorBtn.textContent;
        }
        else if (!operator) {
            operator = operatorBtn.textContent;
        }
        else {
            num1 = operate(operator, num1, num2);
            display.value = num1;
            operator = operatorBtn.textContent;
            num2 = ' ';
        }
       
    }));    


//-- Functions Disable / Enable Decimal --//    
function disableDecimal(){
    document.querySelector('.decimal').disabled=true;
}
function enableDecimal(){
    document.querySelector('.decimal').disabled=false;
}
    


//-- Function Clear Display Screen --//
const btnClear = document.querySelector('#btnClear');
    btnClear.addEventListener('click', () => {
        window.location.reload();
    });


//-- Function Percentage --//
const btnPercent = document.querySelector('#btnPercent');
    btnPercent.addEventListener('click', () => {
        if(!operator){
            display.value = (display.value/100);
            num1 = display.value;
        }
        else {
            display.value = (display.value/100);
            num2 = display.value;
        }  
    });


//-- Function Positive or Negative Number --//
const btnPosNeg = document.querySelector('#btnPosNeg');
    btnPosNeg.addEventListener('click', () => {
        if(!operator){
            display.value = (display.value * -1);
            num1 = display.value;
        }
        else {
            display.value = (display.value * -1);
            num2 = display.value;
        }   
    });

//-- Function Delete number --//
const btnDelete = document.querySelector('#btnDelete');
    btnDelete.addEventListener('click', () => {
        if(!operator){
            display.value = display.value.slice(0, -1);
            num1 = display.value;
        }
        else {
            display.value = display.value.slice(0, -1);
            num2 = display.value;
        }
    });

//-- Function Equals --//
const btnEquals = document.querySelector('#btnEquals');
    btnEquals.addEventListener('click', () => {
        enableDecimal();
        if (!num1 || !num2 || !operator) {
            return;
        }
        else {
        result = operate(operator, num1, num2);
        display.value = result;
        num1='';
        num2='';
        operator='';   
        }
    });