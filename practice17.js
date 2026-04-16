
const num1 = parseFloat(prompt("Enter the first number"));
const num2 = parseFloat(prompt("Enter the second number"));
    
const sum = num1 + num2;

if(isNaN(num1) || isNaN(num2)){
    alert("Input valid numbers");
}else if(sum === 50 || num1 === 50 || num2 === 50){
    alert("True");
}else{
    alert("False");
}