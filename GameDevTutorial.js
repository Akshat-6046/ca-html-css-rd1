let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
 let brickRows = 4;
  let brickColumns = 5;
let brickWidth = 60;
let brickHeight = 20;
let brickPadding = 20;
let brickOffset=10;

let bricks=[];
function setup() {
  let c=createCanvas(400, 400);
  
  background("black");
  paddle_width = 100;
  paddle_x = (width / 2) - (paddle_width / 2);
  paddle_y = height - 25;
  paddle_height = 15;
  vis=1;
  ball_diameter = 20;
  ball_dx =1;
  ball_dy = -2;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 2) - (ball_diameter / 2);
  // block_x=100;
  // block_y=50;
  // block_width=paddle_width*2;
  // block_height=paddle_height;
 
  
}
 
function draw () {
  background("black");
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  if(ball_x + (ball_diameter / 2) > width) {
    ball_dx = -ball_dx;
  }
 
  if(ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
 
  if(ball_y + (ball_diameter / 2) > height) {
    ball_dy = -ball_dy;
    
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }
 
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
 
  if (keyIsDown(LEFT_ARROW)) {
    paddle_x = paddle_x - paddle_dx;
  }
    if (keyIsDown(RIGHT_ARROW)) {
    paddle_x = paddle_x + paddle_dx;
  }
  
 if((ball_x<paddle_x+paddle_width) && 
    (ball_x>paddle_x) && 
    (ball_y<paddle_y+(paddle_height / 2))  && 
    (ball_y>paddle_y-ball_diameter/2)){
   ball_dy=-ball_dy;
 }
 
 //   if((ball_x<paddle_x+paddle_width) && 
 //    (ball_x>paddle_x) && 
 //   ball_y + (ball_diameter/2) < (height-25)){
 //   ball_dy=-ball_dy;
 // }
  
 
  //  if(ball_y + (ball_diameter / 2) > height) {
  //   ball_dy = 0;
  //   ball_dx = 0;
  //    console.log("GAME OVER");
  // }
  
  
//   if(vis==1){
//     let block=rect(block_x, block_y, block_width, block_height);
//   }
//   if(vis&&(ball_x<block_x+block_width) && 
//     (ball_x>block_x) && 
//     (ball_y<block_y+(block_height / 2))  && 
//     (ball_y>block_y)){
    
//      ball_dy=-ball_dy;
     
//     console.log("YOU WIN");
  
//     vis=0;
 
//   }
  
  
for (let c = 0; c < brickColumns; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRows; r++) {
    bricks[c][r] = { x: 0, y: 0 ,vis:1};
  }
}
for (let c = 0; c < brickColumns; c++) {
    for (let r = 0; r < brickRows; r++) {
      let brick=bricks[c][r];
      if(brick.vis==1){
      let brickX = c * (brickWidth + brickPadding) + brickOffset;
      let brickY = r * (brickHeight + brickPadding) + brickOffset+20;
      brick.x = brickX;
      brick.y = brickY;
      brick=rect(brickX, brickY, brickWidth, brickHeight);
   
      }    
}
}
  
   for (var c = 0; c < brickColumns; c++) {
        for (var r = 0; r < brickRows; r++) {
            let brick = bricks[c][r];
          
            if (brick.vis === 1) {
              
                if (ball_x > brick.x && ball_x < brick.x + brickWidth && 
                    ball_y > brick.y && ball_y < brick.y + brickHeight) {
                    ball_dy = -ball_dy;
                    brick.vis = 0;
                  brick=rect(0,0,0,0);
                }
            }
            else {
              
            }
        }
    }
  
}