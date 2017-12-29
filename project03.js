/*
Name: Colleen Duong
Lab Section: D
Email: cduong@andrew.cmu.edu
Project-03 Dynamic Drawing
*/

var sunsize = 50;
var BR = 6; //Sky R color
var BG = 6; //Sky G color
var BB = 50; //Sky B color
var BRG = 25; //Ground R color
var BGG = 62; //Ground G color
var BBG = 16; //Ground B color
var SR = 255 //Sun R color
var SG = 255 //Sun G color
var SB = 255 //Sun B color
var sproutstemh = 610; //sprout stem height


function setup() {
    createCanvas(640, 480);
}

function draw() {
  background(BR, BG, BB);
  noStroke();

//Sky   Start
  //Setting the boundaries for the morning colors to appear
  if ((mouseX >= 640) && (mouseX <= 640)){
      mouseX = 640;
  }

  //Setting the boundaries for the night colors to appear
  //background nighttime colors (6, 6, 50)
  //background daytime colors (187, 235, 235)
  if ((mouseX > 0) && (mouseX < 400)){
    BR = mouseX*((187-6)/400) + 6;
  	BG = mouseX*((235-6)/400) + 6;
  	BB = mouseX*((235-50)/400) + 50;
    }
//Sky   End


//The Sun   Start
  fill(SR, SG, SB);

  //Setting a constraint so the sun cannot leave the canvas
  var constrainy = constrain(mouseY, 0, 300);
  var constrainx = constrain(mouseX, 0, 600);

  //Creating the sun shape
  ellipse(constrainx, constrainy, sunsize, sunsize); //The circle

  //Setting the boundaries for sun to change to morning color
  if ((mouseX > 640) && (mouseX < 640)){
      mouseX = 640;
  }

  //Setting the boundaries for sun to change to night color
  //Daytime Grass (255, 199, 5)
  //Nighttime Grass (255, 255, 255)
  if ((mouseX > 0) && (mouseX < 640)){
    SR = mouseX*((255-255)/640) + 255;
    SG = mouseX*((199-255)/640) + 255;
    SB = mouseX*((5-255)/640) + 255;
    }

  //Changing the Sun Size depending on Location
  sunsize = (0.5*(mouseX+mouseY));
//The Sun   End


//Grass   Start
  //Ground
  fill(BRG, BGG, BBG);
  rect(0, 400, 680, 100);

  //Setting the boundaries for the morning grass colors to appear
  if ((mouseX > 640) && (mouseX < 640)){
      mouseX = 640;
  }

  //Setting the boundaries for the night grass colors to appear
  //Daytime Grass (78, 174, 55)
  //Nighttime Grass (25, 62, 16)
  if ((mouseX > 0) && (mouseX < 640)){
    BRG = mouseX*((78-25)/640) + 25;
    BGG = mouseX*((174-62)/640) + 62;
    BBG = mouseX*((55-16)/640) + 16;
    }
//Grass   End

//Stems Start
  //Make stems grow as the arrow moves across the x-axis
  push();
  translate(35, -mouseX+200); //Make the stems grow upward
  sproutS = rect(35, sproutstemh, 10, 300, 10);
  sprout2S = rect(105, sproutstemh, 10, 300, 10);
  sprout3S = rect(175, sproutstemh, 10, 300, 10);
  sprout4S = rect(245, sproutstemh, 10, 300, 10);
  sprout5S = rect(315, sproutstemh, 10, 300, 10);
  sprout6S = rect(385, sproutstemh, 10, 300, 10);
  sprout7S = rect(455, sproutstemh, 10, 300, 10);
  sprout8S = rect(525, sproutstemh, 10, 300, 10);
  pop();

  //Leaves that pop out of the stem depending on where your mouse is on the x axis
  //Key: SproutL is the first stem's sprouts, Sprout 2L is the second stem's sprouts, etc
  //Key2: SproutL2 is the second leaf from the ground, etc.
  if ((mouseX > 450)){ //First to pop up
    sproutL = ellipse(60, 380, 25, 20);
    sprout3L = ellipse(200, 370, 25, 20);
    sprout7L = ellipse(480, 360, 25, 20);
  }
  if ((mouseX > 480)){ //Second to pop up
    sprout2L = ellipse(130, 385, 25, 20);
    sprout4L = ellipse(300, 360, 25, 20);
    sprout6L = ellipse(410, 370, 25, 20);
    sproutL2 = ellipse(90, 320, 25, 20);
    sprout3L2 = ellipse(230, 320, 25, 20);
    sprout7L2 = ellipse(510, 330, 25, 20);
  }
  if ((mouseX > 520)){ //Third to pop up
    sprout5L = ellipse(340, 355, 25, 20);
    sprout8L = ellipse(580, 350, 25, 20);
    sprout2L2 = ellipse(160, 325, 25, 20);
    sprout3L3 = ellipse(200, 300, 25, 20);
    sprout4L2 = ellipse(270, 310, 25, 20);
    sprout6L2 = ellipse(440, 320, 25, 20);
    sprout7L3 = ellipse(480, 290, 25, 20);
  }
  if ((mouseX > 540)){ //Fourth to pop up
    sproutL3 = ellipse(60, 260, 25, 20);
    sprout2L3 = ellipse(130, 280, 25, 20);
    sprout3L4 = ellipse(230, 275, 25, 20);
    sprout4L3 = ellipse(300, 255, 25, 20);
    sprout5L2 = ellipse(370, 260, 25, 20);
    sprout6L3 = ellipse(410, 260, 25, 20);
    sprout7L4 = ellipse(510, 250, 25, 20);
    sprout8L2 = ellipse(550, 260, 25, 20);
  }

//Last to pop up: Flowers   Start
  if ((mouseX > 575)){ //Petal 1
    fill(247, 154, 185); //Pink Color
    ellipse(50, 200, 40, 40); //Pink

    fill(255, 180, 0); //Orange Color
    ellipse(190, 200, 40, 40); //Orange

    fill(191, 63, 63); //Red Color
    ellipse(120, 200, 40, 40); //Red

    fill(31, 144, 0); //Green Color
    ellipse(330, 200, 40, 40); //Green

    fill(255, 234, 0); //Yellow Color
    ellipse(260, 200, 40, 40); //Yellow

    fill(136, 73, 189); //Purple Color
    ellipse(470, 200, 40, 40); //Purple

    fill(17, 46, 173); //Blue Color
    ellipse(400, 200, 40, 40); //Blue

    fill(70, 63, 69); //Black Color
    ellipse(540, 200, 40, 40); //Black
}

  if ((mouseX > 565)){ //Petal 2
    fill(247, 154, 185); //Pink Color
    ellipse(100, 200, 40, 40); //Pink

    fill(255, 180, 0); //Orange Color
    ellipse(240, 200, 40, 40); //Orange

    fill(191, 63, 63); //Red Color
    ellipse(170, 200, 40, 40); //Red

    fill(31, 144, 0); //Green Color
    ellipse(380, 200, 40, 40); //Green

    fill(255, 234, 0); //Yellow Color
    ellipse(310, 200, 40, 40); //Yellow

    fill(136, 73, 189); //Purple Color
    ellipse(520, 200, 40, 40); //Purple

    fill(17, 46, 173); //Blue Color
    ellipse(450, 200, 40, 40); //Blue

    fill(70, 63, 69); //Black Color
    ellipse(590, 200, 40, 40); //Black
}

if ((mouseX > 570)){ //Petal 3
    fill(247, 154, 185); //Pink Color
    ellipse(75, 180, 40, 40); //Pink

    fill(255, 180, 0); //Orange Color
    ellipse(215, 180, 40, 40); //Orange

    fill(191, 63, 63); //Red Color
    ellipse(145, 180, 40, 40); //Red

    fill(31, 144, 0); //Green Color
    ellipse(355, 180, 40, 40); //Green

    fill(255, 234, 0); //Yellow Color
    ellipse(285, 180, 40, 40); //Yellow

    fill(136, 73, 189); //Purple Color
    ellipse(495, 180, 40, 40); //Purple

    fill(17, 46, 173); //Blue Color
    ellipse(425, 180, 40, 40); //Blue

    fill(70, 63, 69); //Black Color
    ellipse(565, 180, 40, 40); //Black
}

if ((mouseX > 555)){ //Petal 4
    fill(247, 154, 185); //Pink Color
    ellipse(60, 225, 40, 40); //Pink

    fill(255, 180, 0); //Orange Color
    ellipse(200, 225, 40, 40); //Orange

    fill(191, 63, 63); //Red Color
    ellipse(130, 225, 40, 40); //Red

    fill(31, 144, 0); //Green Color
    ellipse(340, 225, 40, 40); //Green

    fill(255, 234, 0); //Yellow Color
    ellipse(270, 225, 40, 40); //Yellow

    fill(136, 73, 189); //Purple Color
    ellipse(480, 225, 40, 40); //Purple

    fill(17, 46, 173); //Blue Color
    ellipse(410, 225, 40, 40); //Blue

    fill(70, 63, 69); //Black Color
    ellipse(550, 225, 40, 40); //Black
}

if ((mouseX > 560)){ //Petal 5
    fill(247, 154, 185); //Pink Color
    ellipse(90, 225, 40, 40); //Pink

    fill(255, 180, 0); //Orange Color
    ellipse(230, 225, 40, 40); //Orange

    fill(191, 63, 63); //Red Color
    ellipse(160, 225, 40, 40); //Red

    fill(31, 144, 0); //Green Color
    ellipse(370, 225, 40, 40); //Green

    fill(255, 234, 0); //Yellow Color
    ellipse(300, 225, 40, 40); //Yellow

    fill(136, 73, 189); //Purple Color
    ellipse(510, 225, 40, 40); //Purple

    fill(17, 46, 173); //Blue Color
    ellipse(440, 225, 40, 40); //Blue

    fill(70, 63, 69); //Black Color
    ellipse(580, 225, 40, 40); //Black
}

  if ((mouseX > 550)){ //Flower Centers
    fill(211, 86, 115); //Dark Pink Center
    ellipse(75, 205, 25, 25);

    fill(194, 139, 7); //Dark Orange Center
    ellipse(215, 205, 25, 25);

    fill(160, 38, 38); //Dark Red Center
    ellipse(145, 205, 25, 25);

    fill(21, 99, 0); //Dark Green Center
    ellipse(355, 205, 25, 25);

    fill(220, 202, 0); //Dark Yellow Center
    ellipse(285, 205, 25, 25);

    fill(96, 39, 144); //Dark Purple Center
    ellipse(495, 205, 25, 25);

    fill(8, 32, 132); //Dark Blue Center
    ellipse(425, 205, 25, 25);

    fill(33, 30, 31); //Dark Black Center
    ellipse(565, 205, 25, 25);
  }
//Stems   End
}
