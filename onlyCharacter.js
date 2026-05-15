
const onlyCharacter = (character) =>{

    if( typeof character !== "string" || character.length < 1){
        return "Invalid";
    }else{
        let result = character.toUpperCase();
        result = result.split(" ").join("");

        return result;
    }

}


console.log(onlyCharacter("  h e llo wor   ld" ));
