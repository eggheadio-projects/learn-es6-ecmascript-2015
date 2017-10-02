let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName}

console.log(person) || displayInPreview(person.firstName) || displayInPreview(person.lastName);

let mascot = "Moose";

let team = {person, mascot};

console.log(team) || displayInPreview(team.mascot);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}