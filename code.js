function add(num1, num2){
    return num1 + num2;
}


function subtract(num1, num2){
    return num1 - num2;
}


function multiply(num1, num2){
    return num1 * num2;
}


function divide(num1, num2){
    if (num2 != 0){
        return (num1 / num2).toFixed(2);
    }else{
        console.log("num2 is 0");
        return "Cannot Divide by 0";
    }
}

function operate(num1, num2, operator){
    
    switch(operator){
        case "+":
            return add(num1, num2);
            break;

        case "-":
            return subtract(num1, num2);
            break;

        case "*":
            return multiply(num1, num2);
            break;

        case "/":
            return divide(num1, num2);
            break;
    }
}




let num1;
let operator;
let num2;
