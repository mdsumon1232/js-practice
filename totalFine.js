

const fare = (regularCost) =>{
  
    if(regularCost <= 0 || typeof regularCost !== "number"){
      return "Invalid";       
}else{
    let totalFine = regularCost + regularCost*(20/100) + 30;
    return totalFine;
}
}

console.log(fare(200))