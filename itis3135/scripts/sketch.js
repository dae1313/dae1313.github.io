function setup() {
    createCanvas(1310, 600).parent('containCanvas');
}

function draw(){
    if(mouseIsPressed){
        fill(137, 207, 240);
    } else {
        fill(255);
    }
    rect(mouseX, mouseY, 40, 40, 15, 15);
}