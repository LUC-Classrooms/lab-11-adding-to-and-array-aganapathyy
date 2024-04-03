
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //create an empty array with 1 space

function setup() { //set up sketch
  createCanvas(500, 300); //create canvas + set size
  dots[0] = new Dot(width/2, height/2); //initialize dots array index 0 with new instance of the Dot class
} //end of setup function

function draw() { //draw something
  background(15,150,140); // create teal backgroud
  
  for(let i = 0; i < dots.length; i++){ //loop throught the array
    dots[i].move(); //move each object
    dots[i].display(); //display each object
  }
  textSize(24); //set the text size
  fill(100, 0, 200); // text color purple
  text("'dots' array length: " + dots.length, 100, 100); // display size of array

} // end of draw function

function mousePressed(){ //when the mouse is pressed/clicked
  let obj = new Dot(mouseX, mouseY); // create new dot object
  
  dots.push(obj); // add to dots array
  console.log(dots.length); //print size of array in the console
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

} // end of mouse pressed


function Dot(X, Y){ //constructor function
  
  this.x = X; // set the x property from the first argument 
  this.y = Y; // set the y property from the second argument 
  this.w = random (20, 50); // random width
  this.sx = random(-5, 5); // set x speed
  this.sy = random(-5, 5); // set y speed
  this.r = random(0, 255); // set red level
  this.g = random(0, 255); // set green level
  this.b = random(0, 255); // set blue level
  
  this.display = function(){ // show the object
    fill(this.r, this.g, this.b); //set the color
    ellipse(this.x, this.y, this.w, this.w);//draw a circle
  }
  
  this.move = function(){ //move the object
    this.x += this.sx; //update horizontal location
    this.y += this.sy; //update verticle location
    
    if (this.x < 0 || this.x > width){ // if off screen horizontally
        this.sx *= -1; // change direction
    } // end of if statment 
    if (this.y < 0 || this.y > height){ // if off screen vertically
        this.sy *= -1; // change direction
    } // end of if statment 
  }// end move method 
    
} // end of dot constructor
