const number = [1,5,6,43,7,34,64];

const even = [];

for(let i = 0 ; i< number.length; i++){
    if(number[i] % 2 === 0){
        even.push(number[i]);
    }
}

console.log(even);