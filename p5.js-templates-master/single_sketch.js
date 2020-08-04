// Single-sketch example

var mobilenet;
var video;
var lable='';

function modelReady(){
  console.log('Model is Ready');
  //mobilenet.predict(imag , gotresults);
  mobilenet.predict(gotresults);

}

function gotresults(error, result){

if(error){
  console.error(error);
}
else{
  console.log(result);
   lable=result[0].label;
  // var label1=result[0].confidence;
  // fill(10);
  // textSize(30);
  //  text(label,10, height - 70);
  //  text(label1,10, height - 30);
  // createP(label);
  // createP(label1);
  mobilenet.predict(gotresults);
 }

}

// // -----------------------LOADIMAGE-----------------------
//  function imageload(){
//    image(video,50,50,width,height);
  
//  }
function setup (){
   createCanvas (550, 650, draw);
  // imag=createImage('Dog.jpg',imageload);
  video=createCapture(VIDEO);
  // video=createImage('video',imageload);
  video.hide();
   // background(0);
    
mobilenet=ml5.imageClassifier('mobilenet', video, modelReady);


}

function draw(){
  background(0);
   image(video,0,0);
   fill(855);
  textSize(70);
  text(lable,15, height - 50);
  
}

// function drawontop(){
// image(video,0,0);
// this.video.fill();

// }



//  function draw(){
//    background(100);
//    fill(255);
//    noStroke();
//    rectMode(CENTER);
//    rect(mouseX, mouseY, 50, 50);
 
// }

// function dosomething(){
//   print("Charan")
// }