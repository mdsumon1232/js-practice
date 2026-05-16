function resultReport(marks){
    if(Array.isArray(marks)){
  
        let result = {};

        let totalPass = 0;
        let totalFail = 0;
        let totalMarks = 0;

        for (let mark of marks){
            if(mark >= 40){
               totalPass++
        }else{
              totalFail++;
        }
       totalMarks += mark;
    
}

totalMarks = Math.round(totalMarks / marks.length);

result.pass = totalPass;
result.fail = totalFail;
result.finalScore = totalMarks;

return result;
}
}

console.log(resultReport([99, 87, 67, 12 ,87]));