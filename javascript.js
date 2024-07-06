function add (a, b) {
    return a + b;
  };
  
function subtract (a, b) {
    return a - b;
  };

function multiply (a,b) {
    return a * b;
  };

function divide (a,b) {
    return a / b;
}

function operate(op,n1,n2){
    if (op=== '+'){
        return add(n1,n2);
    }
    else if (op === "-"){
        return subtract(n1,n2);

    }
    else if(op==="*"){
        return multiply(n1,n2);
    }
    else if(op === "/"){
        return divide(n1,n2) 
    }
}
//select Html side stuff 
let num1;
let num2;
let operator; 
let screen =' ';
let numbers = document.querySelectorAll('.num');
let operon = document.querySelectorAll('.op');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let display = document.querySelector('.display')

function handleNumber(num){
    screen += num
}
numbers.forEach((number)=> number.addEventListener("click", (e)=>{
    handleNumber(e.target.textContent);
    display.textContent = screen
    
}))

clear.addEventListener('click',()=> {
    display.textContent = " ";
    screen = ' ';
} )






//clear display,concentate numbers - when operator button is pressed - clear display and display operator, store num1 in variable - 
//when next number is pressed clear display and store operator in variable while displaying number- when equlas is pressed -
// store num2 in variable, run operate function , clear display and display new number 

