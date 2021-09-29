//Specifyijng a template

function Bike(){
    this.wheels = 2;
    this.speeds = 10;
    this.name ="Huffy";
}
console.log(Bike.wheels);
//To create a new object from your template
//1.)Use the new keyword along with an 'invocation' of th template
//2.)Assign the new object to a variable using =
//3.) This is called making a new INSTANCE of the object
let myBike = new Bike ();
//the console will display all the features of the object created
console.log(new Bike);

//Class Syntax
//Uses the CLASS keyword
//Puts all methods inside of the class as functions without keywords
//The CONSTRUCTOR function is a special one that is called when the NEW KEYWORD is used to make a new instance

//particle systmes




//Object Arrays
let scoresDiv = document.getElementById("ScoresDiv");

//array of objects, the array will have an index
//the obejects wil use the dot opperator
let scores = [
    {team: "Fridays", score:10},
    {team: "Crabs", score:2},
    {team: "Garages", score:222},
    {team: "Hellcats", score:1}
];

/*For loop iterating through the array of objects to print out the team names
 and scores and putting them on the page*/ 
for(let i =0; i<scores.length; i++){
    //creating a new element on the page...A div
    let newEl = document.createElement("div");
    //putting the new element on the page
    //first is the team name which [i] is the length of the array 0-3
    //second is the scores of the same [i] which is also 0-3
    newEl.innerHTML = scores[i].team + ": " + scores[i].score;
    newEl.classList.add("score");
    //printing the actual elements on the page
    scoresDiv.appendChild(newEl);
}

//creating a variable that will pull the div on the HTML page of someBand
let goodBands = document.getElementById("someBand");

//array of objects to show the items in the bands
var bands = [
    { name: "Phish", type: "Jam Band", members: 4},
    { name: "String Cheese Incident", type: "Bluegrass", members: 6}
];

//function to pull out the items from the array of objects above
function firstBand() {
/*pulling the first indext of the first band name and also the 
  .name value from the first array*/    
    let name = bands[0].name;
/*pulling the first item from the first array
  with the type value with the "."connector .name*/     
    let type = bands[0].type;
/*using a TEMPLATE STRING with the backtick ``with some markup and also
   ${} to replace in the variables that we have*/
    goodBands.innerHTML = `<h1>${name}</h1><p>${type}</p>`;
}

function secondBand() {
    let name = bands[1].name;
    let type = bands[1].type;
    goodBands.innerHTML = `<h1>${name}</h1><p>${type}</p>`;
}