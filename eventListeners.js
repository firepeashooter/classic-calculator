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

            if (display.textContent.length <= 20){

                display.textContent += "1";
            }


            break;
            

        case "two":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
            
            if (display.textContent.length <= 20){

                display.textContent += "2";
            }

            break;
            
        case "three":

        //Clears the Display if answer is displayed so we can write new numbers without adding to the subtotal
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
            
            if (display.textContent.length <= 20){

                display.textContent += "3";
            }
            
            break;

        case "four":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "4";
            }

            break;
           

        case "five":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "5";
            }

            break;
            

        case "six":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "6";
            }

            break;
            

        case "seven":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "7";
            }

            break;
            

        case "eight":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "8";
            }

            break;
            

        case "nine":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "9";
            }

            break;
            

        case "zero":
            if (answerDisplayed){
                display.textContent = "";
                answerDisplayed = false;
            }
                      
            if (display.textContent.length <= 20){

                display.textContent += "0";
            }

            break;
            

        case "plus":
            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseFloat(display.textContent);
                
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);
                answerDisplayed = true;
                
                //reset numbers and set operator
                operator = "+";
                num1 = parseFloat(display.textContent);
                num2 = undefined;
                

            } else{
                num1 = parseFloat(display.textContent);
                display.textContent = "";
                operator = "+";
            }

            break;

        case "minus":

            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseFloat(display.textContent);
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);
                answerDisplayed = true;

                operator = "-";
                num1 = parseFloat(display.textContent);
                num2 = undefined;
            } else{
                num1 = parseFloat(display.textContent);
                display.textContent = "";
                operator = "-";

            }

            break;

        
        case "multiply":

            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseFloat(display.textContent);
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);
                answerDisplayed = true;

                operator = "*";
                num1 = parseFloat(display.textContent);
                num2 = undefined;
            } else{
                num1 = parseFloat(display.textContent);
                display.textContent = "";
                operator = "*";

            }

            break;

        
        case "divide":

            //Clear the screen, save the number and the operator
            
            if (num1){ //If we have num1, num2 is the most recent number and we can operate
                num2 = parseFloat(display.textContent);
                display.textContent = "";
                display.textContent = operate(num1, num2, operator);
                answerDisplayed = true;

                operator = "/";
                num1 = parseFloat(display.textContent);
                num2 = undefined;
            } else{
                num1 = parseFloat(display.textContent);
                display.textContent = "";
                operator = "/";

            }

            break;

        case "equals":
            num2 = parseFloat(display.textContent);

            if (num1 && num2){
                display.textContent = operate(num1, num2, operator);
                num1 = undefined;
                num2 = undefined;

            }





    }


})