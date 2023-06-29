const canvas = document.getElementById("canvas");

// get size of canvas
let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;

const LOW_RES = 16;
const MID_RES = 32;
const HIGH_RES = 64;
create_pixels(MID_RES);

//redo the canvas if the user changes the resolution
const lowResButton = document.getElementById("low");
lowResButton.addEventListener("click", function(){
    deletePixels();
    create_pixels(LOW_RES);
})
const midResButton = document.getElementById("medium");
midResButton.addEventListener("click", function(){
    deletePixels();
    create_pixels(MID_RES);
})
const highResButton = document.getElementById("High");
highResButton.addEventListener("click", function(){
    deletePixels();
    create_pixels(HIGH_RES);
})

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function (){
    let pixels = Array.from(document.getElementsByClassName("pixel"));
    pixels.forEach(e => {
        e.style.backgroundColor = "white";
    });
})

function deletePixels(){
    let pixels = Array.from(document.getElementsByClassName("pixel"));
    pixels.forEach(element => {
        element.remove();
    });
}

function create_pixels(res) {
    let numberOfVerticalPixels = res;
    // make the pixels square
    // get the height of the pixels
    let pixelHeight = Math.floor(canvasHeight / res);
    let numberOfHorizontalPixels = Math.floor(canvasWidth / pixelHeight);
    let pixelWidth = pixelHeight;

    // calculate number of pixels needed to fill the canvas 
    let numberOfPixels = numberOfHorizontalPixels * numberOfVerticalPixels;
    let newCanvasWidth = numberOfHorizontalPixels * pixelWidth;
    canvas.style.width = newCanvasWidth + "px";
    let newCanvasHeight = numberOfVerticalPixels * pixelHeight;
    canvas.style.height = newCanvasHeight + "px";

    let stringStyle = "width:" + pixelWidth + "px; height: " + pixelHeight + "px;";
    // add them to canvas
    for (let i = 0; i < numberOfPixels; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel")
        pixel.setAttribute("style", stringStyle);
        pixel.addEventListener("mouseover", changeColor);
        canvas.appendChild(pixel);
    }
}

// Program the hold and color feature
// Get mousedown
// get location of mouse
// get mouseup
let down = false;
canvas.addEventListener("mousedown", mousedown);
function mousedown(){
    event.preventDefault();
    down = true;
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(){
    down = false;
}

function changeColor(e){
    if (down){
        e.target.style.backgroundColor = colorValue;
    }
}

// Setup color picker
let colorPicker;
const defaultColor = "#505050"
let colorValue = defaultColor;
window.addEventListener("load", startup(), false);

function startup(){
    colorPicker = document.getElementById("color");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateColor, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateColor(event){
    colorValue = event.target.value;
}

function updateAll(event){
    colorValue = event.target.value;
}