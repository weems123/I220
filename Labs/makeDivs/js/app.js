
//array of objects given to us from Travis
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   //for loop to itteratte through the array
   for(i = 0; i<objects.length; i++){
   //create the new element that will display the information    
       let newEl = document.createElement("div");
   //draw the bakground coor of each of the objects    
       newEl.style.background = objects[i].color
   //make the height of the objects as specified in the array    
       newEl.style.height = objects[i].height +"px"
   //make the width of the objects as specified in the array    
       newEl.style.width = objects[i].width + "px"
    //float them left so they are horizontal
       newEl.style.cssFloat = "left";
    //give them a margin so they are sperated   
        newEl.style.margin = "5px";
       //actually display the objects onto the screen
        divs.appendChild(newEl);
   }
   