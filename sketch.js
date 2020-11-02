var bullet, wall
var speed, weight, thickness

function setup() {
  createCanvas(800,400);
  
  //speed and weight and thichness
  speed = random(223,300)
  weight = random(30,52)
  thickness = random(22, 83)

  //create car
  bullet = createSprite(50, 200, 25, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  //create wall
  wall = createSprite(700,200,thickness, 200)
}


function draw() {
  background("black");  
  
  if(collided(bullet, wall) /2)
  {
    bullet.velocityX = 0
    
    var damage = 0.5 * weight * speed* speed/(thickness * thickness * thickness)

    if(damage > 10)
    {
      wall.shapeColor = color(255, 0, 0)
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0)
    }
  }

  drawSprites();
}


function collided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x

  if(bulletRightEdge >= wallLeftEdge)
  {
     return true
  }

 else return false
}