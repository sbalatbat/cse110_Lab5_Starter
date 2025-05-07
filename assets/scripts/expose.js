/**
 * @file expose.js: a small sound player implemented for CSE 110
 * @author Sarah Claire Balatbat
 */
/**
 * Global variables
 * @const soundSelector select element controlling the sound type
 * @const playButton button for playing the sound
 * @const volume input range element controlling the sound level
 * @const audioPlayer audio element that holds the referece to the sound file to be played
 * @const jsConfetti confetti canvas element for party horn sound
 */
window.addEventListener('DOMContentLoaded', init);
const soundSelector = document.querySelector("#horn-select");
const playButton = document.getElementsByTagName("button")[0];
const volume = document.querySelector("#volume");
const audioPlayer = document.getElementsByTagName("audio")[0];
const jsConfetti = new JSConfetti();

/**
 * @function init
 * @desc Adds responsive functionality to the webpage by allowing event-based updates.
 */
function init() {
  soundSelector.addEventListener("input", set_media);
  playButton.addEventListener("click", play_sound);
  volume.addEventListener("input", change_volume);
}

/**
 * @function set_media
 * @desc Updates the audio and image files in use.
 * @var soundType currently selected horn sound
 * @const soundImage img element that will show the image for the selected horn sound
 * @const soundFiles list of paths of audio files
 * @const imgFiles list of paths of image files for the sound selector
 */
function set_media() {
  let soundType = soundSelector.value;
  const soundImage = document.getElementsByTagName("img")[0];
  const soundFiles = ["assets/audio/air-horn.mp3", "assets/audio/car-horn.mp3", "assets/audio/party-horn.mp3"];
  const imgFiles = ["assets/images/air-horn.svg", "assets/images/car-horn.svg", "assets/images/party-horn.svg"];

  if (soundType == "air-horn") {
    audioPlayer.src = soundFiles[0];
    soundImage.src = imgFiles[0];
  }
  else if (soundType == "car-horn") {
    audioPlayer.src = soundFiles[1];
    soundImage.src = imgFiles[1];
  }
  else if (soundType == "party-horn") {
    audioPlayer.src = soundFiles[2];
    soundImage.src = imgFiles[2];
  }
}

/**
 * @function play_sound
 * @desc Plays the sound of the audio element based on the button input. Shoots confetti across the screen when the audio is the Party Horn.
 */
function play_sound() {
  audioPlayer.play();
  if (soundSelector.value == "party-horn") {
    jsConfetti.addConfetti();
  }
}

/**
 * @function change_volume
 * @desc Adjusts the volume of the audio element and the volume level indicator based on the slider
 * @var currVolume current volume level on the slider between 0 and 100
 * @const volumeIcon image element for the volume indicator
 * @const iconFiles list of paths of image files for the volume indicator
 */
function change_volume() {
  let currVolume = volume.value;
  audioPlayer.volume = currVolume * 0.01;
  const volumeIcon = document.getElementsByTagName("img")[1];
  const iconFiles = ["assets/icons/volume-level-0.svg", "assets/icons/volume-level-1.svg", "assets/icons/volume-level-2.svg", "assets/icons/volume-level-3.svg"];
  if (currVolume == 0) {
    volumeIcon.src = iconFiles[0];
  }
  else if (currVolume >= 1 && currVolume < 33) {
    volumeIcon.src = iconFiles[1];
  }
  else if (currVolume >= 33 && currVolume < 67) {
    volumeIcon.src = iconFiles[2];
  }
  else if (currVolume >= 67) {
    volumeIcon.src = iconFiles[3];
  }
}