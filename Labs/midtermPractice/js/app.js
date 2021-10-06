function setup(){
    createCanvas(800,600);
    background(200);

}

//for loop to the console
for(i=0; i<5; i++){
    console.log(i);
}



function draw(){
background(200);
circle(mouseX, mouseY, 25);
fill("purple");


if(mouseX >400){
    fill("green");
}
}

//runs 60 times per second
/*function draw(){
    background(200);
}*/

//making an array and spelling out to the console the second index of the array
/*let words = ["Worried", "About", "The", "Midterm"];
console.log(words[2]);*/

/*function draw(){
    
    circle(50, 50, 50);
}

function mousePressed(){
    background(220)
    circle(700, 500, 50);
}*/

//FOR LOOP TO DRAW CIRCLES ACROSS THE SCREEN WHILE X IS LESS THAN THE WIDTH OF THE CANVAS


/*function draw(){
 
    let x = 0;
    for (i=0; i<width; i++){
        let r = random(255);
        let g = random(0,255);
        let b = random(200, 238);
        fill(r, g, b);
        circle(x, 300, 30);
        x = x +40;
       
        
    }


}*/

