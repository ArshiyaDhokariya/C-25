class BaseClass {
    constructor (x,y, width,height,angle)
    {
        var option = {
             restitution : 0.6 ,
             density : 1.5 , 
             friction : 1       
        }
        this.image = loadImage("sprites/base.png")
        this.width= width ;
        this.height = height;
        this.body = Bodies.rectangle (x,y,width,height,option);

        World.add (world,this.body);
        
    }
    

    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
   
    image(this.image,0, 0, this.width, this.height);
    pop();
    }
} 