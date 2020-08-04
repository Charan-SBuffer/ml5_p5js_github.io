var mobilenet;
var video;
var classifier='';
var text;

function setup(){
createCanvas(550, 450, draw);
video=createCapture(VIDEO);
//video.hide();
mobilenet=ml5.featureExtractor('Mobilenet',modelready);
classifier=mobilenet.classification(video,function(){
  console.log("videoLoaded");
});


}


function draw(){
  fill(550);
image(this.video, 0, 0);
  background(0);
  console.log("insidedraw");
}

function modelready(){
  console.log('model is ready');
}