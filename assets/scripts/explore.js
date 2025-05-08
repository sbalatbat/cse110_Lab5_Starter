/**
 * @file explore.js: 
 * @author Sarah Claire Balatbat
 */ 
/**
 * Global variables
 */
const synth = window.speechSynthesis;

const input = document.querySelector("#voice-select");
const textInput = document.getElementsByTagName("textarea")[0];
const icon = document.getElementsByTagName("img")[0];
const playButton = document.getElementsByTagName("button")[0];

let voices = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener("click", () => {
    let text = textInput.value;
    const utter = new SpeechSynthesisUtterance(text);
    const selected = input.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selected) {
        utter.voice = voices[i];
      }
    }
    synth.speak(utter);
    if (synth.speaking) {
      icon.src = "assets/images/smiling-open.png";   
      utter.addEventListener("end", () => {
        icon.src = "assets/images/smiling.png";
      });
    }
  });
}

function populateVoiceList() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    input.appendChild(option);
  }
}