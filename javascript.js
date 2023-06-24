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
let stringStyle = "width:" + pixelWidth + "px; height: " + pixelHeight + "px;";
// add them to canvas
for (let i = 0; i < numberOfPixels; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("style", stringStyle);
    canvas.appendChild(pixel);
}

// 16 columns 26 columns 56 columns
// do the calculation when the screen changes size
// do the calc when the user changes the pixel size