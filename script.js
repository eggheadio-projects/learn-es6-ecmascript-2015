var deliveryBoy ={
  name: "John",
  
  handleMessage: function (message,handler){
  handler(message);
  },
  
  receive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name) || displayInPreview(message + this.name))
  }
}

deliveryBoy.receive();




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}