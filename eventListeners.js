let buttons = document.querySelector(".input");
let display = document.querySelector(".content");
let clear = document.querySelector("#clear");



clear.addEventListener("click", () => {
    //Clear the display
    display.textContent = "";

})

buttons.addEventListener("click", (e) => {

    let target = e.target

    switch(target.id){

        case "one":
            //Append 1 to the screen
            display.textContent += "1";
            break;

        case "two":
            display.textContent += "2";

            break;

        case "three":
            display.textContent += "3";

            break;
        case "four":
            display.textContent += "4";

            break;

        case "five":
            display.textContent += "5";

            break;

        case "six":
            display.textContent += "6";

            break;

        case "seven":
            display.textContent += "7";

            break;

        case "eight":
            display.textContent += "8";

            break;

        case "nine":
            display.textContent += "9";

            break;

        case "zero":
            display.textContent += "0";

            break;

        case "plus":
            
            //Clear the screen, save the number and the operator
            operator = "+";
            
            num1 = parseInt(display.textContent);

            display.textContent = "";

            console.log(num1 + 2);
            //Save the number in the current display to num1

            //If num1 is full save to num2

            //If both numbers are full call operate


            break;

        case "equals":

            num2 = parseInt(display.textContent);

            display.textContent = operate(num1, num2, operator);




    }


})