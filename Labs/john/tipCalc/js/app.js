//Get the information that was input into the bill box
var bill = document.getElementById("bill")
//Get the information that was input into the tip box
var tip = document.getElementById("tip")

//function to determine the amount of the tip and the total amount of the bill
function Total() {
//the total is the bill value plus the tip value--we had to make the value a float so they could take decimals    
    let total = parseFloat(bill.value) + parseFloat(tip.value);
//print out to the console the tip and the total on the same line    
    console.log("Tip: " + tip.value + " " + "Total: " + total);
}