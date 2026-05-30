// canvas drawing on main page
const mainCanvas = document.getElementById("home-canvas");
const ctx = mainCanvas.getContext("2d");
const textBox = document.getElementById("user-text");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
let y = 30;

addBtn.addEventListener("click", function(){
    let text = textBox.value;
    
    ctx.font = "14pt Arial";
    ctx.fillText(text, 50, y); //text, x pos, y pos

    y += 15;

});
clearBtn.addEventListener("click", function(){
    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
})


