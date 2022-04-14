(() => {

const instruments = document.querySelectorAll(".mixer_instruments img"),
  dropArea = document.querySelectorAll(".inst_drop"),
  instrumentArea = document.querySelectorAll(".mixer_instruments");

let config = {
  audioType: 'wav'
}

function grabbed(event){
  console.log("Your chosen instrument");
  event.dataTransfer.setData("idSaved",this.id);
  event.dataTransfer.setData("chosenInstrument", this.dataset.sound);
}

function dragged(event){
  event.preventDefault();
  console.log("instrument dragged")
}

function selected(event){
  event.preventDefault();
  let targetID = event.dataTransfer.getData("idSaved");
  console.log(" You selected this!",targetID);
  event.target.appendChild(document.querySelector(`#${targetID}`));
}

function playInstrument(event){
    let instrumentChoice = event.dataTransfer.getData("instrumentChoice");
    let audio = `sounds/${data}.${config.audioType}`;
    audio.classList.add("playing");
    console.log("you have chosen", instrumentChoice);
    audio.currentTime = 0;
    audio.play();
    audio.volume = 0.4;
}

function refreshAudio(event){
  event.preventDefault();
  let instr = document.querySelectorAll("playing");
  console.log();("instrument refreshing");
  instr.forEach(instr => track.currentTime = 0);
}

instruments.forEach(item => item.addEventListener("dragstart", grabbed));
dropArea.forEach(area => {
  area.addEventListener("dragover", dragged);
  area.addEventListener("drop", selected);
  area.addEventListener("drop", refreshAudio);
});

window.addEventListener("drop", playInstrument);

})();
