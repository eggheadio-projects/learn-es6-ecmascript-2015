//rest parameters vs arguments keyword

function Store() {
  var aisle = {
    fruit: [],
    vegetalbe: []
  }
  return {
    //Store().add('category', 'item1', 'item2');
    add: function(category, ...items) {
      //var items = [].splice.call(arguments, 1);
      console.log(items) || displayInPreview(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle) || displayInPreview(myGroceryStore.aisle.fruit);




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}