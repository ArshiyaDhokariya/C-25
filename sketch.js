const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload(){
backgroundImage = loadImage ("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,320,50,50);
    box2 = new Box(720,320,50,50);
    ground = new Ground(600,height,1200,20);
    bird = new Bird (200,200);
    pig = new Pig (610,350);
    log1 = new Log (610,300,270,PI/2);
    box3 = new Box (500,240,50,50);
    box4 = new Box (720,240,50,50);
    log2 = new Log (610,220,270,PI/2);
    pig2 = new Pig (610,300);
    box5 = new Box (610,150,50,50);
    log3 = new Log (550,150,120,PI/7);
    log4 = new Log (700,150,120,-PI/7)
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}