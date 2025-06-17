let buttons = document.querySelector(".input");
let display = document.querySelector(".content");
let clear = document.querySelector("#clear");



clear.addEventListener("click", () => {
    //Clear the display
    display.textContent = "";

    //clear the variables
    operator = undefined;
    num1 = undefined;
    num2 = undefined;

})

buttons.addEventListener("click", (e) => {

    let target = e.target

    switch(target.id){

        case "one":
            if (num1){
                display.textContent = "1";
            }else{
                display.textContent += "1";
            }
            break;

        case "two":
            if (num1){
                display.textContent = "2";
            }else{
                display.textContent += "2";
            }
            break;
        case "three":
            if (num1){
                display.textContent = "3";
            }else{
                display.textContent += "3";
            }
            break;

        case "four":
            if (num1){
                display.textContent = "4";
            }else{
                display.textContent += "4";
            }
            break;

        case "five":
            if (num1){
                display.textContent = "5";
            }else{
                display.textContent += "5";
            }
            break;

        case "six":
            if (num1){
                display.textContent = "6";
            }else{
                display.textContent += "6";
            }
            break;

        case "seven":
            if (num1){
                display.textContent = "7";
            }else{
                display.textContent += "7";
            }
            break;

        case "eight":
            if (num1){
                display.textContent = "8";
            }else{
                display.textContent += "8";
            }
            break;

        case "nine":
            if (num1){
                display.textContent = "9";
            }else{
                display.textContent += "9";
            }
            break;

        case "zero":
            if (num1){
                display.textContent = "0";
            }else{
                display.textContent += "0";
            }
            break;

        case "plus":
            //Clear the screen, save the number and the operator
            
            operator = "+";

            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseInt(display.textContent);
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);

                //reset numbers???
                num1 = parseInt(display.textContent);
                num2 = undefined;
            } else{
                num1 = parseInt(display.textContent);
                display.textContent = "";
            }

            

            break;

        case "equals":
            num2 = parseInt(display.textContent);

            if (num1 && num2){
                display.textContent = operate(num1, num2, operator);
                num1 = undefined;
                num2 = undefined;

            }





    }


})