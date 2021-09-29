//size of each circle 
let oos = [ 15, 22, 10, 5 , 10, 27];
//color of each circle
let ahs = [ "#ed1a80", "#fcba03", "#ed1a80", "#fcba03", "#ed1a80", "#fcba03"]

function setup() {
  createCanvas(1000, 1000);

}

function draw() {

  background(50);
  //to move to center
  translate(500,500);
  
  if (mouseIsPressed) {
    oos.push(Math.random() * 25);
    
    //to push new color for ech click
    if(Math.random() < 0.5 ) {
      ahs.push("#fcba03");
    } else {
      ahs.push("#ed1a80");
    }
  }
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 50, cos(i)* 50, oos[i]);
    circle(sin(i) * 100, cos(i)* 100, oos[i]);
    circle(sin(i) * 150, cos(i)* 150, oos[i]);
    circle(sin(i) * 200, cos(i)* 200, oos[i]);
    circle(sin(i) * 250, cos(i)* 250, oos[i]);
    circle(sin(i) * 300, cos(i)* 300, oos[i]);
  }
}