const sting = prompt("Enter a text");
const char = parseInt(prompt("Enter position number"));

const strLng = sting.length;

if(strLng === 0 ){
    alert("Enter a text");
}else if(isNaN(char)){
    alert("Enter a valid position");
}else if(char > strLng || char< 0){
    alert(`Position must be withing ${strLng}`);
}else{
    const newText = sting.slice(0,char) + sting.slice(char+1);
    alert(`The new text is ${newText}`);
}