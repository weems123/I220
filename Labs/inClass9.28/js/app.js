//number1 print loop in console from 1-10
for(i=0; i<=10; i++){
    console.log(i);
}

//Number two print loop in console from 10 to 1
for(i=10; i>0; i--){
    console.log(i);
}

//Number three print to console for Fibonacci sequnce
for(i=0; i<=20; i++){
    console.log(i);
}

//Second to last-print the school names backwards
let names = ["Indiana", "University", "Purdue", "University", "Indianapolis"]

//set to a number instead of array.length to specify how many in the array
for(i=4; i>=0; i--){
    console.log(names[i]);
}

console.log("SPACE BETWEEN THE LOOPS!");

//last exercise with "YEAH" after each item of the array
let schoolNames = ["Indiana", "University", "Purdue", "University", "Indianapolis"]

for(i=4; i>=0; i--){
    //printing array schoolNames plus the "yeah!"
    schoolNames[i] = schoolNames[i] + " yeah!"
    if(i === 0){
        //console.log every school name
console.log(schoolNames[0], schoolNames[1], schoolNames[2], schoolNames[3], schoolNames[4])
    }
}


