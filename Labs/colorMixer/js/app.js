let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);

let rgbColor = "rgb(" + r + "," + g + "," + b + ")";

document.getElementById("colorBox").style.backgroundColor = rgbColor;

function changeColor(event){
    let v = event.target.getAttribute("data-value");
    v = parseInt(v);
    r = r + v;
    rgbColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("colorBox").style.backgroundColor = rgbColor;

}