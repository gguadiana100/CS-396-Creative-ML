let video;
let videoToggle = false;
let canvas;
let classifier;
let label = '';
let modelLoaded = false;
let incorrect = 0;
let height = 300;
let width = 400;

function toggleVideo() {
  if (videoToggle) {
    videoToggle = false;
    // video.remove();
    reset();
  }
  else {
    videoToggle = true;
    video = createCapture(VIDEO);
    video.size(width,height);
    video.hide();
  }
}

async function drawVideo() {
  if (videoToggle) {
    image(video, 0, 0);
  }
}

function modelReady() {
  console.log("Model is ready for use");
  modelLoaded = true;
}

function gotModelResults(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    let incorrectFeeling = "";
    for(let i = 0; i < incorrect; i++) {
      incorrectFeeling += "😕";
    }
    label = `I think it's ${results[0].label}. I am feeling this upset: ${incorrectFeeling}`;
  }
}

async function predictFromCanvas() {
  if (videoToggle) {
    var textResults = document.getElementById("resultsText");
    textResults.innerHTML = label;
    classifier.predict(canvas, gotModelResults);
  }
}

function chooseCorrect() {
  incorrect -= 1;
  if (incorrect < 0) {
    incorrect = 0;
  }
}

function chooseIncorrect() {
  incorrect += 1;
}

function setup(){
  // create canvas
	canvas = createCanvas(width, height);
	textSize(20);
	textAlign(CENTER, CENTER);

  // start video capture
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
  videoToggle = false;

  classifier = ml5.imageClassifier('MobileNet', modelReady);

  // setup user interface
  var resultsText = document.createElement("p");
  resultsText.appendChild(document.createTextNode(`${label}`))
  resultsText.setAttribute("id","resultsText");
  document.body.appendChild(resultsText);

  var incorrectNumber = document.createElement("p");
  incorrectNumber.appendChild(document.createTextNode(`Incorrect Attempts: ${incorrect}`))
  incorrectNumber.setAttribute("id","incorrectNumber");
  document.body.appendChild(incorrectNumber);

  var videoToggleButton = document.createElement("BUTTON");
  videoToggleButton.innerHTML = "Toggle video";
  videoToggleButton.onclick = function() {toggleVideo()};
  document.body.appendChild(videoToggleButton);

  var correctButton = document.createElement("BUTTON");
  correctButton.innerHTML = "Correct classification";
  correctButton.onclick = function() {chooseCorrect()};
  document.body.appendChild(correctButton);

  var incorrectButton = document.createElement("BUTTON");
  incorrectButton.innerHTML = "Incorrect classification";
  incorrectButton.onclick = function() {chooseIncorrect()};
  document.body.appendChild(incorrectButton);
}

function draw(){
	background(200);
  drawVideo();
  if (modelLoaded) {
    predictFromCanvas(canvas, gotModelResults);
  }

  var incorrectNumber = document.getElementById("incorrectNumber");
  incorrectNumber.innerHTML = `Incorrect Attempts: ${incorrect}`;
  if (incorrect > 0) {
    for (var i = 0; i < incorrect*200; i++) {
      let noiseXValue = Math.floor(Math.random()*width);
      let noiseYValue = Math.floor(Math.random()*height);;
      square(noiseXValue, noiseYValue, 1);
    }
  }
}
