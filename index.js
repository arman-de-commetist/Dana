document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
    
    audio.play();

    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
    });
});