
//Promises with ES6(2015)...

var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('hello world');
    } else {
      reject('no bueno');
    }
  }, 500);
});

d.then((data) => {
    console.log('success : ', data) || displayInPreview('success : ', data);
    return 'foo bar';
  }).
  then((data) => {
    console.log('success 2 : ', data) || displayInPreview('success 2 : ', data);
  }).
  catch((error) => console.error('error : ', error)) || displayInPreview('error : ', error);



// display in plunker preview
function displayInPreview(string, value) {
  var newDiv = document.createElement("div"); 
var newContent = document.createTextNode(`${string} ${value}`);   newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}