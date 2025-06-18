let buttons = document.querySelector(".input");
let display = document.querySelector(".content");
let clear = document.querySelector("#clear");

let answerDisplayed = false;



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
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
            
            display.textContent += "1";

            break;
            

        case "two":
            
        case "three":

        //Clears the Display if answer is displayed so we can write new numbers without adding to the subtotal
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
            
            display.textContent += "3";
            
            break;

        case "four":
           

        case "five":
            

        case "six":
            

        case "seven":
            

        case "eight":
            

        case "nine":
            

        case "zero":
            

        case "plus":
            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseInt(display.textContent);
                if (num2){
                    display.textContent = "";
                    display.textContent = operate(num1, num2, operator);
                    answerDisplayed = true;
                    
                    //reset numbers and set operator
                    operator = "+"
                    num1 = parseInt(display.textContent);
                    num2 = undefined;
                }

            } else{
                num1 = parseInt(display.textContent);
                display.textContent = "";
                operator = "+"
            }

            break;

        case "minus":

            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseInt(display.textContent);
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);
                answerDisplayed = true;

                operator = "-"
                num1 = parseInt(display.textContent);
                num2 = undefined;
            } else{
                num1 = parseInt(display.textContent);
                display.textContent = "";
                operator = "-"

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