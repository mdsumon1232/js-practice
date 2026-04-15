
let inputNumber = parseFloat(prompt("Enter a number"));

if(isNaN(inputNumber)){
    console.log("Input a valid Number");
}
else if(inputNumber > 13){
 let different = inputNumber - 13;
 let result = different*2;
 console.log(result);
}else{
   let result = 13 - inputNumber;
   console.log(result);
}