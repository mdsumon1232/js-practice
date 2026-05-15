
const bestTeam = (team1 , team2) =>{
    if (typeof team1 !== "object" || typeof team2 !=="object"){
        return "Invalid";
    }else{
        let team1Total = 0;
        let team2Total = 0;
        
        for (let best1 in team1){
            if(typeof team1[best1] === "number"){
                team1Total+= team1[best1];
            }
        }

        for(let best2 in team2){
            if(typeof team2[best2] === "number"){
                team2Total += team2[best2];
            }
        }
      
        if(team1Total > team2Total){
            return team1.name;
        }else if(team1Total < team2Total){
            return team2.name;
        }else{
            return "Tie";
        }

    }
}


console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 5 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))