var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    background("yellow")
  }
  if(keyIsDown(UP_ARROW)){
    background("red")
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("blue")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("brown")
  }

  drawSprites()
  

}




