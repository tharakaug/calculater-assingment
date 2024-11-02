const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialKeys = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {

    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = "";
    }else if(btnValue === "DE"){
        output = output.toString().slice(0,-1);
    }else {
        if (output === "" && specialKeys.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;

};
 buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
 });
