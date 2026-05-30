//assign the variables and get them from the html
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

const rVal = document.getElementById("rValue");
const gVal = document.getElementById("gValue");
const bVal = document.getElementById("bValue");

//get the boxes which will change colour
const colourBox = document.getElementById("colourBox");
const grayscaleBox = document.getElementById("grayscaleBox");
const lightnessValue = document.getElementById("lightnessValue");


function update_boxes(){
    //take a string and convert to an integer
    const red = parseInt(r.value);
    const green = parseInt(g.value);
    const blue = parseInt(b.value);

    // textContent = set or read text i.e add a string to a tag/div
    rVal.textContent = red;
    gVal.textContent = green;
    bVal.textContent = blue;

    //the luminance formula
    const lightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    const asciiChars = "@#S%?*+;:,. ";
    const asciiOutput = document.getElementById("asciiChar");

    colourBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    grayscaleBox.style.backgroundColor = `rgb(${lightness}, ${lightness}, ${lightness})`;

    lightnessValue.textContent = lightness.toFixed(2) //to 2dp

    
    // ASCII output
    const charIndex = Math.floor((lightness / 255) * (asciiChars.length - 1));
    asciiOutput.textContent = asciiChars[charIndex];
}

r.addEventListener("input", update_boxes);
g.addEventListener('input', update_boxes);
b.addEventListener("input", update_boxes);

update_boxes();



/* Code to convert an image into ascii art */

const imageInput = document.getElementById("imageInput");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const asciiOutput = document.getElementById("asciiOutput");
const asciiChar ="@#$%*+;:,. ";

imageInput.addEventListener("change", handleImage);

function handleImage(event){
    const img = new Image();
    img.src = URL.createObjectURL(event.target.files[0]);

    img.onload = () => {

        const maxWidth = 150;
        let scale = 1;

        if (img.width > maxWidth) {
            scale = maxWidth / img.width;
        }

        const width = Math.floor(img.width * scale);
        const height = Math.floor(img.height * scale);

        // REAL canvas size
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        let ascii = "";

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {

                const index = (y * width + x) * 4;
                const r = data[index];
                const g = data[index + 1];
                const b = data[index + 2];

                const brightness = 0.2126*r + 0.7152*g + 0.0722*b;

                const charIndex = Math.floor(
                    (brightness / 255) * (asciiChar.length - 1)
                );

                ascii += asciiChar[charIndex];
            }
            ascii += "\n";
        }

        asciiOutput.textContent = ascii;
    };
}
