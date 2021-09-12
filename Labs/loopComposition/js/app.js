function setup() {
    createCanvas(800, 600);
    background(200);
}

function draw() 
{
    let c=0;
    let a=0;
  
    while(a <400)
    {
     let b = random(600);
     noStroke();
     fill("purple");
     circle(random(0, 350), b, 50);
     a++ 
     console.log(a);  
    }

    while(c < 400)
    {
        let d = random(600);
        noStroke();
        fill("black");
        circle(random(350, 800), d, 50);
        c++
        console.log(c + "text");
    }
    
}
