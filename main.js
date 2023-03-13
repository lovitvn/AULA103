Webcam.attach("#camera")
Webcam.set({
  width:350,
  heigth:300,
  image_format:"png",
  png_quality:90
})
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/NHv4mtZZ6/model.json',modelLoaded);

 camera=document.getElementById("camera")
function modelLoaded(){
  console.log("the modelou was carregated bacause me knows engreis")
}