
//setting variable to work with from the html id we set to display on the page
let results = document.getElementById("result");

//function to calculate the sum and average when the button is pressed
function average(){
//setting variable for the numbers input by the user
    let numbers = test.value; 
//splitting each number the user inputs with a comma    
    let nums = numbers.split(",");
//sum starts at zero
    let sum = 0;
//for loop to check over the numbers input by the user
    for(let i = 0; i < nums.length; i++){
//adding up all the numbers input in to the box by user
        sum += Number(nums[i]);
        
        
    }
    //calcuatin the average which is sum of all numbers divided by total number of items
    let average = sum /nums.length
    //printing ou tthe sum and the average of the numbers input 
    results.innerHTML = "sum:" + sum + " " + "average:" + average;
 
}