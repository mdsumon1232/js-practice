const date = new Date();

const targetDay = new Date(2026,11,25);

let diff = targetDay - date;

const remainDays =  Math.floor((diff /1000)/(60*60*24));

const hours = Math.floor((diff /1000)/(60*60))%24;
const minutes = Math.floor((diff /1000)/60)%60;
const seconds = Math.floor(diff /1000)%60;
console.log(`Remaining chiasmas days are ${remainDays} : ${hours}`);
