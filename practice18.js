const text = prompt("Enter a word");

const firstTwoLetter = text.slice(0, 2);

if(text=== null || text === ""){
  alert("Please enter a word");
}else if(firstTwoLetter === "py"){
    alert(text);
}else{
    alert("py"+text);
}