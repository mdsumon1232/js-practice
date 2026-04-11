let randomNumber = Math.random();

randomNumber = Math.floor(randomNumber * 10)+1;

let userNumber = parseInt(prompt("Enter a number"));

if(randomNumber === userNumber){
    console.log("Good Work");
}else{
    console.log("Not matched");
}