const canvas = document.getElementById("canvas");
console.log(canvas);

// add pixels using math
// get size of canvas
let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;
console.log("Width: " + canvasWidth + " Height: " + canvasHeight);
// get size of pixels
let pixelWidth = Math.floor(canvasWidth/16);
let pixelHeight = Math.floor(canvasHeight/16);
// calculate number of pixels needed
let numberOfPixels = 16*16;
let newCanvasWidth = 16*pixelWidth;
canvas.style.width = newCanvasWidth+"px";
let newCanvasHeight = 16*pixelHeight;
canvas.style.height = newCanvasHeight+"px";
console.log("Width: " + canvas.style.width + " Height: " + canvas.style.height);

let stringStyle = "width:" + pixelWidth + "px; height: " + pixelHeight + "px;";
// add them to canvas
for (let i = 0; i < numberOfPixels; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style", stringStyle);
    pixel.addEventListener("mouseover", changeColor);
    canvas.appendChild(pixel);
}

// Program the hold and color feature
// Get mousedown
// get location of mouse
// get mouseup
let down = false;
canvas.addEventListener("mousedown", mousedown);
function mousedown(){
    down = true;
    console.log("Mouse Down");
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(){
    down = false;
    console.log("Mouse Up");
}

function changeColor(e){
    if (down){
        e.target.style.backgroundColor = "grey";
    }
}

// 16 columns 26 columns 56 columns
// do the calculation when the screen changes size
// do the calc when the user changes the pixel size