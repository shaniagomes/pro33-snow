const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myengine, myworld;
var meg;
var bg;

function preload(){
	megimg=loadImage("megss.png");
  megimg2=loadImage("Megas.png")
  bg=loadImage("backgsnow.jpg");
  }

function setup() {
  createCanvas(1300, 600);

  myengine = Engine.create();
	myworld = myengine.world;

  //createSprite(400, 200, 50, 50);
  meg=new hum(1050,580);


  
}

function draw() {
  background(bg);  

  meg.display;


  Engine.update(myengine);
  //drawsprites();
}