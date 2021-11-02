//setting the variable to the input from the user
let num = document.getElementById("numToCheck");

//function that when the button is pressed to call the function to check for divisble by 7
function checkNum(){
    checking();
}

//function to actually check if the number input by user is divisble by 7
function checking(){
//if statement to see if the number is divisble by 7    
    if (num.value % 7 == 0){
 //display TRUE to the user on the screen if the number is divisible by 7       
        document.getElementById("number").innerHTML = "true"
 //return statement       
        return "True";
 //else if the number is not divisble by 7       
    } else {
 //display FALSE to the user on the screen if the number is not divisble by 7       
        document.getElementById("number").innerHTML = "False"
 //return statement       
        return "False"
    }
}
