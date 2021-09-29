

function setup(){
    createCanvas(800,600);
    background('green');
}

/*let item = {
    name: 'circle',
    attributes: [
        width=20,
        height=20, 
        position=(400, 300),
        fill=('white')
    ]
};*/

let item = {
    name: "circle",
    fill = "white"
    
}

function draw(){
     item.update();
}
//console.log(item);

