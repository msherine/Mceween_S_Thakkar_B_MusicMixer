(() => {

const instruments = document.querySelectorAll(".mixer_instruments img"),
  dropArea = document.querySelectorAll(".inst_drop"),
  instrumentArea = document.querySelectorAll(".mixer_instruments"),

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
  console.log(" You selected this!",)
}

})();
