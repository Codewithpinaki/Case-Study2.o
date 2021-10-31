function setup() {
 
}

function modelLoaded() {
  console.log('model Loaded');
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    if ((results[0].confidence > 0.5) && (previous_result != results[0].label)) {
      console.log(results);
      previous_result = results[0].label;
      var synth = window.speechSynthesis;
      speak_data = 'Object detected is - ' + results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_objrct_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }
}