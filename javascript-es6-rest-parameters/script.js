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
      console.log(items);
      items.forEach(function(value, index, array) {
        aisle[category].push(value);
      });
    },
    aisle: aisle
  }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);