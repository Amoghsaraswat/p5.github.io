function preload() {   
}
function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,200,100,200,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(45,45,80);
    circle(555,45,80);
    circle(45,355,80);
    circle(555,355,80);
    fill(0,0,255);
    stroke(0,0,255);
    rect(85,40,430,20);
    rect(85,340,430,20);
}
function take_snapshot() {
save("p5.png");
}
