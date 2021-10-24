
//get the value that was input into the first name box of the input field
var fName = document.getElementById("first")
//get the value that was input into the last name box of the input field
var lName = document.getElementById("last")

//function to return to the user the name they input plus the greeting Hello
function save() {
//Return the value of the input with the greeting
    console.log("Hello " + fName.value + " " + lName.value);
    
}

