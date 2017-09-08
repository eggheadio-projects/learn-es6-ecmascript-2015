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

console.log(greeting);

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${ x + y }`

console.log(equation);

function tag(strings, ...values){
    if(values[0] < 20) {
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}


var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);