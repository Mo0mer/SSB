function returnHome() {
    window.location.href = "Home.html";
}

function goToLogIn() {
    window.location.href = "LogIn.html";
}

function toggleAudio() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function goToVideoPage() {
    window.location.href = "Pashalka.html";
}