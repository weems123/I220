//setting the event listener for the click of the box 
element.addEventListener("click", beenClicked);


//function to run when the event is triggered that will display the answer to the flashcard
function questions(event){
    //setting the variable for the information stored in the data-answer attribute
    let answer = event.target.getAttribute("data-answer")
    //using the data attribute to display the response to our flashcard answers
    event.target.innerHTML = answer;
}