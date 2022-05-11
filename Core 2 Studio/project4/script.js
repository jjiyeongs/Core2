function_(selector){
    return document.querySelector(selector);
}
function setup(){
    let canvas = createCanvas(650, 600);
    canvas.parent("canvas-wrapper");
    background(255);
}
function mouseDragged(){
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let size = parseInt(_("#pen-size").value);
    fill (color);
    stroke(color);
    if(type == "pencil"){
        AudioListener(pmouseX, pmouseY, mouseX, mouseY);
    } else {
        ellipse(mouseX, mouseY, size, size);
    }
}
_("#reset-canvas").addEventListener("click", function(){
    background(255);
});
_("#save-canvas").addEventListener("click",function(){
    saveCanvas(canvas, "sketch","png");
});