class Block extends base{
  constructor(x, y, width, height) {
    super(x,y,30,40);
     this.Visibility = 255
    }
    display(){
      if(this.body.speed<1.75){
        super.display();
      } else {
        World.remove(world, this.body)
        push()
        this.Visibility = this.Visibility-15
        tint(255,this.Visibility)
        image(this.image,this.body.position.x,this.body.position.y,30,40);
        pop()
      }
      
    }
  }