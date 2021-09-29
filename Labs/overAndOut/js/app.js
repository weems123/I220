//make the height of the square 100px
let squareHeight = "100px";
//make the length of the square 100px
let squareLength = "100px";
//get the element from HTML with the ID squareDiv
let squareDiv = document.getElementById("squareDiv");
//display the length of the square at 100
squareDiv.style.width = squareLength;
//display the height of the square at 100
squareDiv.style.height = squareHeight;
//start the background of the square as black
squareDiv.style.backgroundColor= "#212fce";
//display the square on the screen
document.body.appendChild(squareDiv);

//function to change the color of the square to blue while mouse is over the square
        function blue(){
               squareDiv.style.backgroundColor = "#070707";
               
            }
//function to change the color back to black once the mouse is off the square
        function black(){
            squareDiv.style.backgroundColor = "#212fce";
        }
