const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var engine, world, mConstraint;
var canvas;

var pendulum1, pendulum2, pendulu3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling4;

function setup() {

  canvas = createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  // Creating mouse constraint
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {

    mouse : canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  // Creating the pendulums
  pendulum1 = new Pendulum(500, 400);
  pendulum2 = new Pendulum(420, 400);
  pendulum3 = new Pendulum(340, 400);
  pendulum4 = new Pendulum(260, 400);
  pendulum5 = new Pendulum(180, 400);

  // Creating the slings to attach the pendulums to a point
  sling1 = new Sling(pendulum1.body, {x : 500, y : 300});
  sling2 = new Sling(pendulum2.body, {x : 420, y : 300});
  sling3 = new Sling(pendulum3.body, {x : 340, y : 300});
  sling4 = new Sling(pendulum4.body, {x : 260, y : 300});
  sling5 = new Sling(pendulum5.body, {x : 180, y : 300});

  Engine.run(engine);

}

function draw() {
  
  background("black");

  // Displaying the pendulums
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  // Displaying the slings
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged(){

  Matter.Body.setPosition(pendulum1.body, {x : mouseX, y : mouseY});
}