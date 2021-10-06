//array of objects I own
let cds = [
    {artist: "Phish", title: "Junta", tracks: 14},
    {artist: "String Cheese Incident", title: "Round The Wheel", tracks: 6},
    {artist: "Robert Cray Band", title: "Nothin but love", tracks: 10}
];
//for loop to loop through the itmes
for(i = 0; i <=cds.length - 1; i++){
    
    //if statement to update the items 
    if(cds[i].tracks < 10){
        //set the div itme to black
        document.getElementById("div2").style.color = "black";
        //the item that should be udpated
        document.getElementById("div2").innerHTML = cds[i].artist + ", " +cds[i].title + ", " + cds[i].tracks; 
    }else{
        //creating the items on the page
        let display = document.createElement("div");
    display.innerHTML = cds[i].artist + ", " + cds[i].title + ", " + cds[i].tracks;
    display.classList.add("colors");
    //display the items on the page
    compactDiscs.appendChild(display);
    }
    
    
}