var deliveryBoy ={
  name: "John",
  
  handleMessage: function (message,handler){
  handler(message);
  },
  
  receive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name))
  }
}

deliveryBoy.receive();