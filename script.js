var salutation = "Hello";
var place = "planet";
var greeting = `

${salutation},
  You
    Crazy        ${place}

    How
  Are
      You


`;

console.log(greeting) || displayInPreview(greeting);

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${ x + y }`

console.log(equation) || displayInPreview(equation);

function tag(strings, ...values){
    if(values[0] < 20) {
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}


var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message) || displayInPreview(message);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}