const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";

const calculate =(btnValue)=>{
    if (btnValue === "=" && btnValue !== ""){
            output = eval(output.replace("%","/100"));
        }else if (btnValue === "Ac"){
                output= "";
            }else if (btnValue === "Del"){
                    output = output.toString().slice(0,-1);
    }else{
            if (output === "" && specialChars.includes(btnValue))return;
            output += btnValue;
        }
        display.value = output
    }
    buttons.forEach((button) => {
        button.addEventListener("click",(e)=>calculate(e.target.dataset.value))
});




    function container() {
        document.getElementById("btn").style.display = "block";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("c-appe").disabled = true;
    }
    const container2=()=>{
        document.getElementById("btn").style.display = "block";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("c-appe2").disabled = true;    }