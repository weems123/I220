//setting the variable cards to select all the classes from the document that have the class cards
const cards = document.querySelectorAll('.vegas_card');

//setting variable card being flipped--set to false to start
let hasFlipped = false;
//setting variable for the board to be locked--set to false to start
let boardLock = false;
 let first, second;

//function to add the flip of the card 
function flipCard() {
    if (boardLock) return;
    if (this === first) return;
  this.classList.add('flip');

//if statment to see if the card has not ben flipped if it has been flipped, return it to the cover.
if (!hasFlipped) {
        hasFlipped = true;
         first = this;
         return;
       }

       second = this;

       checkForMatch();
    }

    //see if the first flip is EXACTLY the same as the second card depending on the value of the data attribute set (VERY COOL!)
    function checkForMatch() {
           if (first.dataset.hotel === second.dataset.hotel) {
             disableCards();
             vegas_card.style.backgroundColor = "purple";
             return;
           }
        
           unflipCards();
         }
        
         function disableCards() {
           first.removeEventListener('click', flipCard);
           second.removeEventListener('click', flipCard);
           resetBoard();
         }
        
         //setting the timeout of the cards so they don't stay visable for more than 2 seconds and to lock the board if two cards are showing at once
         function unflipCards() {
            boardLock = true;

           setTimeout(() => {
             first.classList.remove('flip');
             second.classList.remove('flip');
             resetBoard();
           }, 2000);
         }



         function resetBoard() {
               [hasFlipped, boardLock] = [false, false];
               [first, second] = [null, null];
             }



             (function shuffle() {
                   cards.forEach(card => {
                     let ramdomPos = Math.floor(Math.random() * 12);
                     card.style.order = ramdomPos;
                   });
                 })();

//adding the event listener to wait for the click to run the function flipCard
cards.forEach(card => card.addEventListener('click', flipCard));

//button to
let newGame = document.querySelector("#reload");
//function to reload the page
function reload() {
    reload = location.reload();
}
// Event listeners for reload if the button is clicked to restart the game
newGame.addEventListener("click", reload, false);