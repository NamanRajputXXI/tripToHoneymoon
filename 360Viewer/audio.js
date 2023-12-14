
var audio = document.getElementById("myAudio");

// Function to toggle sound and update speaker icons
function toggleSound() {
  var volumeOnIcon = document.querySelector(".fa-volume-high");
  var volumeOffIcon = document.querySelector(".fa-volume-xmark");

  // Check if the audio is initially muted (based on user's choice in the popup)
  var isInitiallyMuted = audio.muted;

  if (isInitiallyMuted) {
    audio.muted = false;
    audio.play();
    volumeOnIcon.style.display = "block";
    volumeOffIcon.style.display = "none";
  } else {
    audio.muted = true;
    audio.pause();
    volumeOnIcon.style.display = "none";
    volumeOffIcon.style.display = "block";
  }
}

// Function to show the modal and overlay
function showModal() {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlay");
  modal.style.display = "flex";
  overlay.style.display = "block";
}
function closeModalAfterYes(){
    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
    toggleSound()
}

// Function to close the modal and overlay
function closeModal() {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
  var volumeOnIcon = document.querySelector(".fa-volume-high");
  volumeOnIcon.style.display = "none"
  

}

// Show the modal on page load
window.onload = function () {
  showModal();
};
