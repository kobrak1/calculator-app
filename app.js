const result = document.querySelector(".item1");
const buttons = document.querySelectorAll("button");
const specialChar = ["+", "-", "*", "/", "="];
let output = "";

//Define function to calculate based on button button clicked
const Calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else {
        if (output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }
    result.value = output;
    console.log(typeof output)
}

//Add event listener to buttons, call Calculate() on click
buttons.forEach ((element) => {
    // button click listener calls Calculate() with dataset value as argument
    element.addEventListener("click", (e) => Calculate(e.target.dataset.v));
});
