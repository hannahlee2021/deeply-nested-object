
//variable declarations

//icons
let hair1 = [];
let hair2 = [];


//# of iterations per icon
let iconNum = 20;

//declaring icon as arrays (for placement)
let icon_hair1 = [];
let icon_hair2 = [];


//loading + declaring image files
function preload(){
  

   icon_hair1 = loadImage('hairs/hair.png');
   icon_hair2 = loadImage('hairs/hair2.png');
  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //declaring randomized placements of each icon
    for (let i = 0; i < iconNum; i++){
    
    hair1[i] = new Hair(random(windowWidth),random(windowHeight));
    hair2[i] = new Hair2(random(windowWidth), random(windowHeight));

      
    }



  
}

function draw() {

  background(255)

      scene0();


}

//assigning what happens in scene 0 (1st scene)
function scene0() {

  for (let i = 0; i < iconNum; i++){
  
  hair1[i].body()
  hair1[i].move()

  hair2[i].body()
  hair2[i].move()
 
  }

  }


//declaring icons for scene 0
/* HAIR1 ICON */
class Hair{
  constructor(x,y){
	this.x = x;
	this.y = y;
    //this.r = r;
    //this.c = c;
  }
  
  body(){
    //fill(this.c)
    noStroke()
    image(icon_hair1,this.x,this.y,50,50);
   }
  
  move(){
    this.y++;
    if (this.y>height){
      this.y=0;
    }
  }
  remove(){
    this.x = -100;
    this.y = -100;
  }

}

class Hair2 {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  body() {
    noStroke();
    image(icon_hair2, this.x, this.y, 50, 50);
  }

  move() {
    this.y++;
    if(this.y>height) {
      this.y=0;
    }
  }

  remove() {
    this.x = -100;
    this.y = -100;
  }
}


