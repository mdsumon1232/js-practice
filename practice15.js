const num1 = parseFloat(prompt("Enter first number"));
const num2 = parseFloat(prompt("Enter second number"));

if(num1 === num2){
    const sum = num1 + num2;
    console.log(`result is ${3*sum}`);
}else{
    console.log(`result is ${num1 + num2}`);
}