function setup(){
    createCanvas(800,600);
    background("black");
}

//array will hold 20 meeples
let meeples = [];

//for looop to go through the 20 meeples with a name "Meeple #"
/*for(let i = 0; i < 20; i++) {
    //push a new meeple with a random age up to 50
  meeples.push( { name: "Meeple #"+i, age: Math.floor(Math.random() * 50) });
}
//show the meeples in the console
console.log(meeples);*/

function click(){

//for looop to go through the 20 meeples with a name "Meeple #"
for(let i = 0; i < 20; i++) {
    //push a new meeple with a random age up to 50
  meeples.push( { name: "Meeple #"+i, age: Math.floor(Math.random() * 50) });
  //add one to the age of the meeples in the array/object
  meeples[i].age++;
  
  console.log(meeples[i]);
}
//show the meeples in the console


}