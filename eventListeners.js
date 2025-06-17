let buttons = document.querySelector(".row");
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
            console.log("two");

            break;

        case "three":
            console.log("three");

            break;

        case "plus":
            console.log("plus");

            break;




    }


})