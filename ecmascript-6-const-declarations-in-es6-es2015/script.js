// const is a constant reference
const VALUE = {};
VALUE.foo = 'bar';
console.log('value: ', VALUE) || displayInPreview('value: ', VALUE);


// const adheres to block scope
const foo = "baz";

if(true){
  const foo = "bar";
  console.log('foo: ', foo) || displayInPreview('foo: ', foo);
}

console.log('foo: ', foo) || displayInPreview('foo: ', foo);



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}