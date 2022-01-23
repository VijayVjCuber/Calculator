//Number buttons
const button1 = document.getElementsByClassName("buttons")[0];
const button2 = document.getElementsByClassName("buttons")[1];
const button3 = document.getElementsByClassName("buttons")[2];
const button4 = document.getElementsByClassName("buttons")[4];
const button5 = document.getElementsByClassName("buttons")[5];
const button6 = document.getElementsByClassName("buttons")[6];
const button7 = document.getElementsByClassName("buttons")[8];
const button8 = document.getElementsByClassName("buttons")[9];
const button9 = document.getElementsByClassName("buttons")[10];
const button0 = document.getElementsByClassName("buttons")[12];
//Operator buttons
const plus = document.getElementsByClassName("buttons")[3];
const minus = document.getElementsByClassName("buttons")[7];
const multiply = document.getElementsByClassName("buttons")[11];
const divide = document.getElementsByClassName("buttons")[15];

const equals = document.getElementsByClassName("buttons")[13];
const clear = document.getElementsByClassName("buttons")[14];

//others
const disp = document.getElementById("input");
let indvnumbers="";
let numbers = [];
let operators =[];
let lastoperator = "";
let lastbutton = "";
let total = 0;


//function for click 
function clickFunction(button){
    if(button==="clear"){
        disp.innerText="0";
        indvnumbers="";
        numbers.length=0;
        operators.length=0;
        lastoperator="";
        lastbutton="";
        total=0;
    }
    else{
        if(disp.innerText==="0"){
            disp.innerText="";
        }
        if(!isNaN(parseInt(button.innerText))){
            disp.innerText+=button.innerText;
        }
        else if(lastbutton!="operator"){
            disp.innerText+=button.innerText;
        }
        if(button.innerText==="="){
            let j=0;
            numbers.push(parseInt(indvnumbers));
            indvnumbers="";
            lastbutton="";
            for(let i=0;i<numbers.length;i++){
                if(i===0){
                    total+=numbers[0];
                }
                else if(lastoperator==="+"){
                    total += parseInt(numbers[i]);
                }
                else if(lastoperator==="-"){
                    total -= parseInt(numbers[i]);
                }
                else if(lastoperator==="x"){
                    total *= parseInt(numbers[i]);
                }
                else if(lastoperator==="/"){
                    total /= parseInt(numbers[i]);
                }
                while(j<operators.length){
                    lastoperator=operators[i];
                    j++;
                    break;
                }
            }
            disp.innerText=total.toString();
            numbers.length=0;
            operators.length=0;
            lastoperator="";
            indvnumbers=total.toString();
            total=0;
        }
        else if(button.innerText==="+"||button.innerText==="-"||button.innerText==="x"||button.innerText==="/"){
            if(lastbutton!="operator"){
                operators.push(button.innerText);
                numbers.push(parseInt(indvnumbers));
                lastbutton="operator";
                lastoperator=button.innerText;
                indvnumbers="";
            }
        }
        else{
            indvnumbers+=button.innerText;
            lastbutton="";
            lastoperator="";
            // numbers.push(parseInt(button.innerText));
        }
        console.log("End Operator: "+operators);
        console.log("end num: "+indvnumbers);
        console.log("End numbers: "+numbers);
        console.log("End lastbutton: "+lastbutton);
    }

}

//button click function calls
button1.onclick = ()=> clickFunction(button1);
button2.onclick = ()=> clickFunction(button2);
button3.onclick = ()=> clickFunction(button3);
button4.onclick = ()=> clickFunction(button4);
button5.onclick = ()=> clickFunction(button5);
button6.onclick = ()=> clickFunction(button6);
button7.onclick = ()=> clickFunction(button7);
button8.onclick = ()=> clickFunction(button8);
button9.onclick = ()=> clickFunction(button9);
button0.onclick = ()=> clickFunction(button0);

//keyboard functions
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 48) {
        clickFunction(button0);
    }
    else if(event.keyCode === 49) {
        clickFunction(button1);
    }
    else if(event.keyCode === 50) {
        clickFunction(button2);
    }
    else if(event.keyCode === 51) {
        clickFunction(button3);
    }
    else if(event.keyCode === 52) {
        clickFunction(button4);
    }
    else if(event.keyCode === 53) {
        clickFunction(button5);
    }
    else if(event.keyCode === 54) {
        clickFunction(button6);
    }
    else if(event.keyCode === 55) {
        clickFunction(button7);
    }
    else if(event.keyCode === 56) {
        clickFunction(button8);
    }
    else if(event.keyCode === 57) {
        clickFunction(button9);
    }
    else if(event.keyCode === 187) {
        clickFunction(plus);
    }
    else if(event.keyCode === 189) {
        clickFunction(minus);
    }
    else if(event.keyCode === 88) {
        clickFunction(multiply);
    }
    else if(event.keyCode === 191) {
        clickFunction(divide);
    }
    else if(event.keyCode === 13) {
        clickFunction(equals);
    }
    else if(event.keyCode === 8) {
        clickFunction("clear");
    }
});


//operator function calls
plus.onclick = ()=> clickFunction(plus);
minus.onclick = ()=> clickFunction(minus);
multiply.onclick = ()=> clickFunction(multiply);
divide.onclick = ()=> clickFunction(divide);

equals.onclick = ()=> clickFunction(equals);
clear.onclick =() => clickFunction("clear")
//other
