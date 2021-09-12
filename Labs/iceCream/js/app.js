let iceCream = ["white", "brown", "pink"];

function setup(){
    createCanvas(900, 600);
    background("black");
}

function draw(){

    for(i = 0; i < iceCream.length; i++)
    {
        fill("yellow");
        //fill("blue");
    rect(400 + 150 * i, 300, 100, 50);
    }
}

console.log(iceCream);