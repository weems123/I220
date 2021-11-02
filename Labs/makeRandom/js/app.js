
//function that calls the other function to create a random number when the button is called
function randomNum(){
    createRandom();
}

//function to actually create the random number when the button is pressed
function createRandom(){
//math to generate a random number between 0-10    
    let x = Math.round(Math.random() * 10);
//displaying the random nuber to the user with the html ID result   
   document.getElementById("result").innerHTML = x;
}