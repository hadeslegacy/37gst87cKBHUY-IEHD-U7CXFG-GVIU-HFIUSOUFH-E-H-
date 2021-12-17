//https://teachablemachine.withgoogle.com/models/1i5dgaV_a/
//https://teachablemachine.withgoogle.com/models/1i5dgaV_a/
//https://teachablemachine.withgoogle.com/models/1i5dgaV_a/

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 91
});

camera = document.getElementById("camera");

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_image' src= '" + data_uri + "'>"
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1i5dgaV_a/model.json', model_loaded);

function model_loaded() {
    console.log("it is load")
}

prediction_1 = ""
prediction_2 = ""

function speak() {
    synth = window.speechSynthesis;
    speak_Data1 = "da first prediction iz" + prediction_1
    speak_Data2 = " and da second prediction iz" + prediction_2
    utterThis = new SpeechSynthesisUtterance(speak_Data1 + speak_Data2)
    synth.speak(utterThis);
}

function emoji_select() {
    img = document.getElementById('capture_image');
    classifier.classify(img, got_result)
}


function got_result(error, result) {
    if (error == true) {
        console.log("there is a robberer in your bank account sir")
    } else {
        console.log(result, "to the moon")
        document.getElementById("result_emotion_name").innerHTML = result[0].label
        document.getElementById("result_emotion_name2").innerHTML = result[1].label
        prediction_1 = result[0].label
        prediction_2 = result[1].label
        speak()
        if (result[0].label == "happy") {
            document.getElementById("update_emogi").innerHTML = "&#128512;"
        }
        if (result[0].label == "sad") {
            document.getElementById("update_emogi").innerHTML = "&#128532;"
        }
        if (result[0].label == "cry") {
            document.getElementById("update_emogi").innerHTML = "&#128546;"
        }
        if (result[0].label == "angry") {
            document.getElementById("update_emogi").innerHTML = "&#128548;"
        }
        if (result[1].label == "happy") {
            document.getElementById("update_emogi2").innerHTML = "&#128512;"
        }
        if (result[1].label == "sad") {
            document.getElementById("update_emogi2").innerHTML = "&#128532;"
        }
        if (result[1].label == "cry") {
            document.getElementById("update_emogi2").innerHTML = "&#128546;"
        }
        if (result[1].label == "angry") {
            document.getElementById("update_emogi2").innerHTML = "&#128548;"
        }
    }
}