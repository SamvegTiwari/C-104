Webcam.set({
  width:350,
  height:300,
  image_format : "png",
 png_quality:95
})

camera= document.getElementById("camera");

webcam.attach("camera");

function take_snapshot(){
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='C_imgSt'src='"  +data_uri+"'>"
    })
}

classifiero=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/", model_loaded);

function model_loaded(){
    console.log("model has been loaded");   
}