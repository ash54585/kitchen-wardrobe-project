function preload(){
    img=loadImage('background.jpg');
    }
    function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    }
    img="";
    function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("kitchen", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    }