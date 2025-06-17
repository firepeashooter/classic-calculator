let buttons = document.querySelector(".row");

buttons.addEventListener("click", (e) => {

    let target = e.target

    switch(target.id){

        case "one":
            console.log("one");
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