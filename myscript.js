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
let result = '';


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
        case "*":
            operation = multiply(num1, num2);
            break;
        case "/":
            operation = divide(num1, num2);
            break;         
    }
    if (operation == Infinity) {
        return "ERROR";
    }

   if (!Number.isInteger(operation)){
        return parseFloat(operation.toFixed(6));
    }
    else {
        return operation;
    }
   
}


//-- Initial Display Value --//

const display = document.getElementById("display");
   display.value = '0';
   num1 = display.value;
   num2 = '0';
 

   
//-- Function clicking Number Buttons Array --//

const btnNumber = Array.from(document.querySelectorAll('#btnNumber'));
    btnNumber.forEach(numberBtn => numberBtn.addEventListener('click', () => {
        if (!operator){
            if (num1 === '0' || num1 === 0){
                if (!(numberBtn.textContent === '.')) {
                    num1 = numberBtn.textContent;
                }
                else {
                    disableDecimal();
                    num1 += '.';
                }
            }
            else if (numberBtn.textContent === '.') {
                disableDecimal();
                num1 += '.';
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
            if (num2 === '0' || num2 === 0){
                if (!(numberBtn.textContent === '.')) {
                    num2 = numberBtn.textContent;
                }
                else {
                    disableDecimal();
                    num2 += '.';
                }
            }
            else if (numberBtn.textContent === '.') {
                disableDecimal();
                num2 += '.';
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



//-- Function clicking Operator Buttons Array--//

const btnOperator = Array.from(document.querySelectorAll('#btnOperator'));
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



//-- Function using Keyboard --//

document.addEventListener('keydown', (keyboard) => {
    const sameNumber = btnNumber.find((numberBtn) => numberBtn.textContent === keyboard.key);
    const sameOperator = btnOperator.find((operatorBtn) => operatorBtn.textContent === keyboard.key);
    
    if (sameNumber){
        sameNumber.click();
    }
    else if (sameOperator){
        sameOperator.click();
    }
    else if (keyboard.key === "=" || keyboard.key === 'Enter') {
        btnEquals.click();
    }
    else if (keyboard.key === 'Backspace' || keyboard.key === 'Delete') {
        btnDelete.click();
    }
    else if (keyboard.key === 'Clear') {
        btnClear.click();
    }
});

