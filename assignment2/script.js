// First course of action: get access to the video
const video = document.querySelector("#custom-video-player");
console.log(video);
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

//---------------------------------------------------------------------------
// stepping logic
// 1. get access to the right buttons

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

const step3Button = document.querySelector("#step3-button");
console.log(step3Button);

const step4Button = document.querySelector("#step4-button");
console.log(step4Button);

const step5Button = document.querySelector("#step5-button");
console.log(step5Button);

const step6Button = document.querySelector("#step6-button");
console.log(step6Button);

const step7Button = document.querySelector("#step7-button");
console.log(step7Button);

// 2. add addeventlistener for the click on the button

step1Button.addEventListener("click", gotoStep1);
step2Button.addEventListener("click", gotoStep2);
step3Button.addEventListener("click", gotoStep3);
step4Button.addEventListener("click", gotoStep4);
step5Button.addEventListener("click", gotoStep5);
step6Button.addEventListener("click", gotoStep6);
step7Button.addEventListener("click", gotoStep7);

// 3. write the callback function that individual steps

function gotoStep1() {
  video.currentTime = 16;
}
function gotoStep2() {
  video.currentTime = 34;
}
function gotoStep3() {
  video.currentTime = 47;
}
function gotoStep4() {
  video.currentTime = 61;
}
function gotoStep5() {
  video.currentTime = 74;
}
function gotoStep6() {
  video.currentTime = 85;
}
function gotoStep7() {
  video.currentTime = 137;
}
function gotoStep8() {
  video.currentTime = 162;
}

//---------------------------------------------------------------------------
// full screen logic
// 1. get access to the right button

const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

// 2. add addeventlistener for the click on the button

fullScreenButton.addEventListener("click", goFullScreen);
video.addEventListener("dblclick", goFullScreen);

// 3. write the callback function that individual steps
function goFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//---------------------------------------------------------------------------
// go back 10 seconds before logic
// 1. get access to the right button
const back10SecButton = document.querySelector("#back10sec-button");
console.log(back10SecButton);

// 2.add click event
back10SecButton.addEventListener("click", goBack10Sec);

// 3. write the callback function
// To write this function, I helped myself from the structure "fastForwardVideo" function in week8's script.js
// I also know that "currentTime" is a video property that sets or returns the current position in seconds.
function goBack10Sec() {
  // if the video is more than 10 seconds in
  if (video.currentTime > 10) {
    // go back 10 seconds
    video.currentTime -= 10;
  } else {
    // otherwise, reset the video to 0 (the start)
    video.currentTime = 0;
  }
}

//---------------------------------------------------------------------------
// go forward 10 seconds after logic
// 1. get access to the right button
const next10SecButton = document.querySelector("#next10sec-button");
console.log(next10SecButton);

// 2.add click event
next10SecButton.addEventListener("click", goForward10Sec);

// 3. write the callback function
// To write this function, I helped myself from the structure "fastForwardVideo" function in week8's script.js.
function goForward10Sec() {
  // if the video is more than 10 seconds from the end
  if (video.currentTime < video.duration - 10) {
    // go forward 10 seconds
    video.currentTime += 10;
  } else {
    // otherwise, set the video to the end
    video.currentTime = video.duration;
  }
}

//---------------------------------------------------------------------------
// mute unmute logic
// 1. get access to the right button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// 2. add addeventlistener for the click on the button

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// 3. write the callback function that needs to mute or unmute the video

function toggleAudio() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    video.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
//---------------------------------------------------------------------------
// toggle button for description logic
// 1. get access to the right button and text
// toggleBtn is a button when clicked by the user will "show more" or "show less" the description text
const toggleBtn = document.querySelector(".toggle-description");
console.log(toggleBtn);
// descriptionText is the paragraph that contains the description of the video that we want to show more of or less of
const descriptionText = document.querySelector(".description-text");
console.log(descriptionText);

// add click event
// which means when the user clicks on the button, it will call the function toggleDescription
toggleBtn.addEventListener("click", toggleDescription);

// write the callback function
// the function toggleDescription will toggle the class "hidden" on the descriptionText
function toggleDescription() {
  descriptionText.classList.toggle("hidden");
  // if the class "hidden" is present, it means the text is hidden
  if (descriptionText.classList.contains("hidden")) {
    // so we change the button text to "Show less"
    toggleBtn.textContent = "Show less";
  } else {
    // if the class "hidden" is not present, it means the text is visible
    // so we change the button text to "Show more"
    toggleBtn.textContent = "Show more";
  }
}

//---------------------------------------------------------------------------
// subscribe button logic
// 1. get access to the right button
const subscribeBtn = document.getElementById("subscribe-btn");
console.log(subscribeBtn);

const subsCount = document.querySelector(".subscribers-count");

// add click event
// when the user clicks on the button, it will call the function toggle
subscribeBtn.addEventListener("click", toggle);

// write the callback function
// the function toggle will toggle the class "subscribed" on the subscribeBtn
function toggle() {
  subscribeBtn.classList.toggle("subscribed");
  // if the class "subscribed" is present, it means the user is subscribed
  if (subscribeBtn.classList.contains("subscribed")) {
    // so we change the button text to "Unsubscribe :("
    subscribeBtn.textContent = "Unsubscribe :(";
    // and change the number of subscribers to 1.3M
    subsCount.textContent = "1.3M subscribers";
  } else {
    // if the class "subscribed" is not present, it means the user is not subscribed
    // so we change the button text to "Subscribe :)"
    subscribeBtn.textContent = "Subscribe :)";
    // and go back to the original number of subscribers to 1.2M
    subsCount.textContent = "1.2M subscribers";
  }
}
