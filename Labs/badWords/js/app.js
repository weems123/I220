
//counter for the bad words
let counter = 0;

//creating the variable to interact with the element on the page
let h1 = document.getElementById("h1")


//function that will start once the button is pressed
function badWords(){

    //creating the variable from the value of what the user inputs
    let words = document.getElementById("info").value; 
    //make sure the words can be counted even if not in correct case
    words = words.toLowerCase();
    //splitting the words with a space 
    let word = words.split(" ");

    counter = 0;

    //for loop to check to see if each word happens to be one of the words we designated as "bad"
    for(let i = 0; i < word.length; i++){
        if(word[i] == "clear" || word[i] == "water" || word[i] == "tires"){
            counter++;

        }
        
        
    }
    //creating variable for the counter on the page
    h1.innerHTML=counter;

    //grabbing the elements from the ID in html and making the value nothing so the user can start again
    document.getElementById("info").value = "";
}