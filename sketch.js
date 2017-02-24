var mic;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  
  fill(0, 0,250);  
  stroke(0);  
  strokeWeight(1);
  textAlign(CENTER);
  textSize(height/15);
  text("WHISTLE !", width/2, height/8);    
    
    
  fill(0);  
  noStroke(); 
  textSize(height/30);
  text("level 1", width/12, height/1.65);
  text("level 2", width/12, height/2.5);
  
  stroke(0)
  strokeWeight(2);
  line(0,height/1.6,width,height/1.6);
  line(0,height/2.4,width,height/2.4);
  
  rectMode(CENTER);
  
  var h1 = map(vol, 0, 1, height/2, 0);    
  
  strokeWeight(1);
  if(h1*2 <= height/2.4){
   background(0,250,0);
   fill(0,250,0);
   stroke(0);
   textSize(height/8);
   textAlign(CENTER);
   text("WIN!", width/2, height/1.3);
      
  } else if(h1*2 <= height/1.6){
   textSize(height/20);
   fill(250,0,0);
   stroke(0);  
   textAlign(CENTER);
   text("Great Job!", width/2, height/1.3);
  } else {
   fill(50);
   stroke(0);
  }
  
  rect(width/2,h1*1.95, height/20,height/20);

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
