
//setting the random colors for Red Green and Blue
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);

//setting the RGB color to the Red Green and Blue that we established above
let rgbColor = "rgb(" + r + "," + g + "," + b + ")";

document.getElementById("colorBox").style.backgroundColor = rgbColor;
document.getElementById("rgb").innerHTML = "rgb(" + r + "," + g + "," + b + ")";


//function to change the color depending on which button the user selected
function changeColor(event){
    let v = event.target.getAttribute("data-value");
    let color = event.target.getAttribute("data-color");
    v = parseInt(v);
    

// if statement to see     
    if(color == "red" && r<255){
        r += v
//if the color goes above 255, set it back to 255        
        if(r > 255){
            r = 255
        }
    }
    else if(color == "green" && g<255){
        g += v
//if the color goes above 255, set it back to 255         
        if(g > 255){
            g = 255
        }
    }
    else if(color == "blue" && b<255){
        b += v
//if the color goes above 255, set it back to 255         
        if(b > 255){
            b = 255
        }
    }

    rgbColor = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("colorBox").style.backgroundColor = rgbColor;
    
    document.getElementById("rgb").innerHTML = "rgb(" + r + "," + g + "," + b + ")";

}