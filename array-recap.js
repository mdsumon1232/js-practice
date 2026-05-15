const name = ["kamal" , "jamal" , "hasan", "manik", "amal"];

const arraySort = name.sort();


const numbers = [1,12,14,5,16,35];

const numberSort = numbers.sort((a,b)=> b-a);


// ----------------- duplicate array item remove ------------


const newArray =["kamal", "samal", "badal","kamal" ,"kamal", "naran","maran"];

function duplicateRemove(array){
    const singl = [];

    for(let item of newArray){
        if(singl.includes(item) === false){
            singl.push(item);
        }
    }
    return singl;
}


// ---------------------- value swap -------------------

let firstName = "md";
let lastName = "sumon";

// let tamp = firstName;

// firstName = lastName;
// lastName = tamp;

[firstName, lastName] = [lastName, firstName];

// ---------------- bigest number find -----------------

const numberList = [10,34,76,46,76,45,75,45,24];

const bigest = (numbers) => {

    let big = numbers[0];

    for(let bigt of numberList){
        if(bigt < big){
            big = bigt;
        }
    }
 return big;


}

const result = bigest(numberList);

console.log(result);