Webcam.set({
    height:350,
    width:350,
    image_format:"jpg",
    jpg_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);
function t_img(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='taken_img' src="+data_uri+">"
    });
};

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AIt5Mwan7/model.json",modelloded);
function modelloded(){
    console.log("Model Loaded!")
};

function r_img(){
    img=document.getElementById('taken_img');
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById("obj").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}