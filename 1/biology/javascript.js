

window.onload = function () {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var nextButton = document.getElementById("next");
  var prevButton = document.getElementById("previous");

  nextButton.addEventListener("click", function () {
    var videos = ["videos/1.mp4", "videos/2.mp4", "videos/3.mp4", "videos/4.mp4"];
    var video = document.getElementById("video");
    var videoSrc = video.getAttribute("src");
    var currentVideoIndex = videos.indexOf(videoSrc);
    if (currentVideoIndex != -1) {
      if (currentVideoIndex >= 0 && currentVideoIndex < videos.length - 1) {
        video.src = videos[currentVideoIndex + 1];
      }
    }
  });

  prevButton.addEventListener("click", function () {
    var videos = ["videos/1.mp4", "videos/2.mp4", "videos/3.mp4", "videos/4.mp4"];
    var video = document.getElementById("video");
    var videoSrc = video.getAttribute("src");
    var currentVideoIndex = videos.indexOf(videoSrc);
    if (currentVideoIndex != -1) {
      if (currentVideoIndex > 0 && currentVideoIndex <= videos.length - 1) {
        video.src = videos[currentVideoIndex - 1];
      }
    }
  })
  // Event listener for the play/pause button
  playButton.addEventListener("click", function () {
    if (video.paused == true) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "وقف";
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "تشغيل";
    }
  });

  // Event listener for the mute button
  muteButton.addEventListener("click", function () {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = "تفعيل الصوت";
    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = "كتم";
    }
  });
}


// reload the page

// location.reload()
