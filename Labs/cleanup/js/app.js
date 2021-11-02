//setting str to what the user input to clean up
let str = document.getElementById("remove");

//function to remove the # from the input and return a clean statement
function replace(){
   //string equals the value that the user input 
    str = str.value
    //replacing the # from the input with out the #
    document.getElementById("string").innerHTML= str.replace(/#/gi, "");

}
