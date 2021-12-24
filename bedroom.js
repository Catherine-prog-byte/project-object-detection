img="";
status_obj="";
function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}
function preload() {
    img=loadImage("bedroom.jpg");
}
function draw() {
   image(img,0,0,640,420);
   fill("#FFB600");
   text("bed",100,100);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(80,80,500,400);

   fill("#FFB600");
   text("plant",200,150);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(180,120,150,80);
}
function modelLoaded() {
    console.log("Model Loaded");
    status_obj=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}