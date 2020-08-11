const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;
var count = 0;
var gameState = "play";

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
   plinkos.push(new Plinko(j,375));
  }
    
}
 
function draw() {

  background("black");

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(particle != null) {

    particle.display();

    if(particle.body.position.y>500) {
      
      if(particle.body.position.x < 80 || particle.body.position.x > 720) {
        
        score = score + 500;
        particle = null;
        count++;

        if(count >= 5) {
          gameState = "end";
        }

      } else if(particle.body.position.x < 160 || particle.body.position.x > 640) {
        
        score = score + 400;
        particle = null;
        count++;

        if(count >= 5) {
          gameState = "end";
        }

      } else if(particle.body.position.x < 240 || particle.body.position.x > 560) {
        
        score = score + 300;
        particle = null;
        count++;

        if(count >= 5) {
          gameState = "end";
        }

      } else if(particle.body.position.x < 320 || particle.body.position.x > 480) {
        
        score = score + 200;
        particle = null;
        count++;

        if(count >= 5) {
          gameState = "end";
        }

      } else if(particle.body.position.x < 400 || particle.body.position.x > 400) {
        
        score = score + 100;
        particle = null;
        count++;

        if(count >= 5) {
          gameState = "end";
        }

      }

    }

  }

  textSize(25);
  text("500", 20, 525);
  text("500", 740, 525);
  text("400", 100, 525);
  text("400", 660, 525);
  text("300", 180, 525);
  text("300", 580, 525);
  text("200", 260, 525);
  text("200", 500, 525);
  text("100", 340, 525);
  text("100", 420, 525);

  text("Score:" + score, 670, 40);

  if(gameState === "end") {
    text("Game Over", 350, 450);
  }

  fill("yellow");
  line(0, 500, 800, 500);
  
}

function mousePressed() {

  if(gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }

}