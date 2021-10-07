class Form {
  constructor() {
    this.input = createInput("Name") //removed attribute
    this.playButton = createButton("Play");
    this.title = createElement("h1");
    this.greeting = createElement("h2");
    this.reset=createButton("Reset");
    
  }

  /*setElementsPosition() {
   
  }*/
/*
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }*/

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {
      this.title.html("Car Racing game")
      this.title.position(width/2-100,100)
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.reset.position(width-200,100)
      
      this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
     
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      
      this.greeting.html("Hello "+player.name+" Please wait for other players to join");
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });

      //code to reset the database

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref("players").remove()
      })
     
  }

  /*display() {
    this.setElementsPosition();
   // this.setElementsStyle();
    this.handleMousePressed();
  }*/
}
