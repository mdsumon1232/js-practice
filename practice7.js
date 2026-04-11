
for(let i = 2014; i<=2050; i++){
    const date = new Date(i,0,1);
    const day = date.getDay();
    if(day === 0){
        console.log(i)
    }
}
