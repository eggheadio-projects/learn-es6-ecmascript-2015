let receive = (complete = () => console.log("complete")) => complete()

receive();