
function characterCount(str){
    const strlen = str.length;
    if(strlen %2=== 0){
        console.log("Number of character is even");
        
    }else{
        console.log("Number of character is odd");
    }
}


function number(numbers){

    let sum = 0;

    if(typeof numbers === "string" || typeof numbers === "number"){

        return "input a valid array";
    }else{
        for(number of numbers){
           sum+= number;
        }
    }

    return `Total number of ${sum}`;
}

const result =number([3,4,5,4,3,5,5,4,5]);


// task 1
function multiply(a,b,c,d){
    const multiply = a*b*c*d;
    return multiply;
}


// task 2

function oddEven(num){
    if(num%2===0){
        const result = num/2;
        return result;
    }else{
        const result = num*2;
        return result;
    }
}

// task 3

function numberList(numbers){
    const lenght = numbers.length;
    
    let sum = 0;
    for(number of numbers){
        sum+= number;
    }

    const average = sum/lenght;
    return average;
}

console.log(numberList([4,5,6,4,6,4,4,6,4,5,45,4]));