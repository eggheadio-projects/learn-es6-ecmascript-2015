
var color = "red";
var speed = 10;
var drive = "go";
var car = {
    color,
    speed,
    [drive]: function(){
        console.log("vroom") || displayInPreview("vroom");
    }
};



console.log(car.color) || displayInPreview(car.color);
console.log(car.speed) || displayInPreview(car.speed);

car[drive]();



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}