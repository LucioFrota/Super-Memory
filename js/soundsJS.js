let listElemAudio = [
  "audioInicio",
  "audioSave",
  "audioBeep",
  "audioVitory",
  "audioNivel",
  "audioErro",
  "audioEnd",
  "audioGame",
];
let listFileAudio = [
  ["inicio", 1],
  ["save", 1],
  ["beep", 2],
  ["vitory", 3],
  ["nivel", 1],
  ["erro", 2],
  ["end", 4],
  ["jogo", 8],
];
function randomFile(elemSound, nameFile) {
  let num = Math.ceil(Math.random() * elemSound);
  let src = "../sounds/" + nameFile + num + ".mp3";
  return src;
}

function newAudio(id, src, vol) {
  var sound = document.createElement("audio");
  sound.id = id;
  sound.src = src;
  sound.volume = vol;
  return sound;
}
function setSound() {
  let vol = 0.3;
  const divAudio = document.body.querySelector("#div-audio");
  for (let i = 0; i < listElemAudio.length; i++) {
    const sound1 = new newAudio(
      listElemAudio[i],
      randomFile(listFileAudio[i][1], listFileAudio[i][0]),
      vol
    );
    divAudio.appendChild(sound1);
  }
}

setSound();
function playGeral(audioElem) {
  var audioGeral = document.getElementById(audioElem);
  audioGeral.play();
  audioGeral.currentTime = 0;
}

function stopAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}
