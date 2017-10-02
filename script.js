function varFunc(){
  var previous = 0;
  var current = 1;
  var i;
  var temp;
  
  for(i = 0; i < 10; i+=1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
  console.log(current) || displayInPreview(current);
}

function letFunc(){
  let previous = 0;
  let current = 1;
  
  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }
  
  console.log(current) || displayInPreview(current);
}

varFunc();
letFunc();



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}