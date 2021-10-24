
//grab the elemenet that was input by the user in the username box
var username = document.getElementById("username")
//grab the element that was input by the password box
var password = document.getElementById("password")
//the div id so we can display the message depending on the input of the user
let div = document.getElementById("check");


//function to see what the user input and to determine if it mathches what we want
function login() {
//if the information in BOTH boxes was input correclty...    
    if(username.value == "Username" && password.value == "Password"){
//Display the message SUCCESS!        
        div.innerHTML = "Success!"
//otherwise...
    }else{
//Tell the user they input the incorrect information        
        div.innerHTML = "Wrong Information"
    } 

}

