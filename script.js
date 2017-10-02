let first = [1, 2, 3];
let second = [4, 5, 6];

function addThreeThings(a, b, c){
  let result = a + b + c;
  console.log(result) || displayInPreview(result);
}

addThreeThings(...first);
addThreeThings(...second);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}