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
let num1 ='';
let operator = ''; 
let currentValue =' ';
let numbers = document.querySelectorAll('.num');
let operon = document.querySelectorAll('.op');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let display = document.querySelector('.display');

clear.addEventListener('click',()=> {
    display.textContent = " ";
    currentValue = ' ';
    operator =' ';
    num1 = '';
    
} )
function handleNum1(num){
    currentValue += num;
}
numbers.forEach((number)=> number.addEventListener("click", (e)=>{
    handleNum1(e.target.textContent);
    display.textContent = currentValue;
    
}))

function handleOperator(ope){
    operator += ope;
    num1 = currentValue;
    console.log(num1);
    currentValue ='';
}

operon.forEach((op)=>op.addEventListener("click",(c)=>{
    handleOperator(c.target.textContent);
    display.textContent = operator;
}))

function calculate(){
    num1 = Number(num1);
    currentValue = Number(currentValue);
    let finalValue = operate(operator,num1,currentValue);
    display.textContent = finalValue;
    currentValue = finalValue;
    operator = '';

}

equal.addEventListener("click", calculate);



//equal function will need to clear op, num1, num2 




//clear display,concentate numbers - when operator button is pressed - clear display and display operator, store num1 in variable - 
//when next number is pressed clear display and store operator in variable while displaying number- when equlas is pressed -
// store num2 in variable, run operate function , clear display and display new number 

