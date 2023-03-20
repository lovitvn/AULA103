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
  console.log("the modelou was carregated beicalse me fruenti om engreis")
}
function check(){
  img=document.getElementById("captured_image")
  classifier.classify(img,gotresult)
}
function gotresult(error,result){
  if (error){
    console.error(error)
  }
  else{
    console.log(result)
    document.getElementById("resultobna").innerHTML=result[0].label
    document.getElementById("resulttobac").innerHTML=result[0].confidence.toFixed(2)
  }
}