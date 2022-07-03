var ball;

function setup() {
  createCanvas(500, 600);

  ball = createSprite(250,200, 50,50);
  ball.shapeColor="orange";
}

function draw() {
  background("black");

  drawSprites();

}