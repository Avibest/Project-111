var prediction = ""

Webcam.set({
    width: 350,
    height: 300,
    image_formart:'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap (function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>'
    });
}
console.log("ml5 Version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n_h2846qi/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    var snyth = window.speechSynthesis;
    var speak_data = "The prediction is"+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    snyth.speak(utterThis);
}