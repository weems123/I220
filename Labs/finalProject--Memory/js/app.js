//setting the variable cards to select all the classes from the document that have the class cards
let cards = document.querySelectorAll('.vegas_Cards');

//setting variable card being flipped--set to false to start
let flipped = false;
//setting variable for the board to be locked--set to false to start
let boardLocked = false;
let firstFlip, secondFlip;

//function to add the flip of the card 
function flipCard() {
    if(boardLocked) return;
    if(this === firstFlip) return;
  this.classList.add('flip');

//if statment to see if the card has not ben flipped if it has ben flipped, return it to the cover.
if(!flipped) {
    flipped = true;
    firstFlip = this;
    return;
}

secondFlip = this;
boardLocked = true;


seeIfMatched();
}

//see if the first flip is EXACTLY the same as the second card depending on the value of the data attribute set (VERY COOL!)
function seeIfMatched(){
    if(firstFlip.dataset.hotel === secondFlip.dataset.hotel) {
        disableCards();
        return;
    }
    unflipCards();
    }
    

function disableCards(){
    firstFlip.removeEventListener('click', flipCard);
    secondFlip.removeEventListener('click', flipCard);
    boardReset();
}

//setting the timeout of the cards so they don't stay visable for more than 2 seconds and to lock the board if two cards are showing at once
function unflipCards() {
    setTimeout(() => {
        firstFlip.classList.remove('flip');
        secondFlip.classList.remove('flip');
        boardReset();
    }, 2000);
}

function boardReset() {
    [cardHasFlipped, boardLocked] = [false, false];
    [firstFlip, secondFlip] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 14);
        card.style.order = randomPos;
    });
})();

//adding the event listener to wait for the click to run the function flipCard
cards.forEach(card => card.addEventListener('click', flipCard));

