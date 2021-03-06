class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("PLAY")
        this.greeting = createElement("h2")
    }
    hide(){
      this.input.hide()
this.button.hide()
this.greeting.hide()
    }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(displayWidth/2-100,0)
        
        this.input.position(displayWidth/2-50, displayHeight/2-200)
       
        this.button.position(displayWidth/2+50, displayHeight-550)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
           
            this.greeting.html("Hi "+ player.name+" Waiting for other players to join")
            this.greeting.position(displayWidth/2-200, 150)
        })
    }
}