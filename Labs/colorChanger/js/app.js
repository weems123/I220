
//function to change the color depending on which square was pressed
function changeColor(event){

//let response be the click from the user that changes the square to the color we set in the attribute
       let response = event.target.getAttribute("data-color");
       console.log();

        event.target.style.backgroundColor = response;
   }