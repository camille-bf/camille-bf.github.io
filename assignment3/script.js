const audio = document.getElementById("audioPlayer");
const progressBar = document.querySelector("#progress-bar-fill");
audio.addEventListener("timeupdate", updateProgress);
function updateProgress() {
  let duration = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = duration + "%";
}
