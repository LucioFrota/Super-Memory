let order = [];
let clikedOrder = [];
let nivSequence = 0;
let phase = 1;
var arrayDivOne = [];
var arrayDivTwo = [];
var arrayDivThree = [];
let listColor = new Array(3);
let colorOrder = [];
var nivDefault = 1;
let touches = 0;
let touchesColors = 0;
let lentes = 4;
let isGameOver = false;

//--------------------------------------
const arrayIdList = [
  "red-One",
  "orange-One",
  "green-One",
  "blue-One",
  "blue-two",
  "green-two",
  "orange-two",
  "red-two",
  "red-three",
  "orange-three",
  "green-three",
  "blue-three",
];

var listDivs = [12];
const c4 = 261.6,
  cPlus4 = 277.2,
  d4 = 293.7,
  dPlus4 = 311.1,
  e4 = 329.6,
  f4 = 349.2,
  fPlus4 = 370.0,
  g4 = 392.0,
  gPlus4 = 415.3,
  a4 = 440.0,
  aPlus4 = 466.2,
  b4 = 493.9;
var listFreqs = [
  c4,
  cPlus4,
  d4,
  dPlus4,
  e4,
  f4,
  fPlus4,
  g4,
  gPlus4,
  a4,
  aPlus4,
  b4,
];

var context,
  oscillator,
  contextGain,
  x = 1,
  type = "sine",
  frequency;
// ------------------------------------
function setDivsGame() {
  for (let i = 0; i < 12; i++) {
    listDivs[i] = elemById(arrayIdList[i]);
  }
}
setDivsGame();

function elemById(elemId) {
  this.elemId = elemId;
  this.varName = document.getElementById(this.elemId);
  return this.varName;
}
function querySel(elemId) {
  this.elemId = elemId;
  this.varName = document.querySelector(this.elemId);
  return this.varName;
}
function setDisplay(varName, state) {
  this.varName = varName;
  this.state = state;
  if (this.varName.constructor === Array) {
    for (let i = 0; i < this.varName.length; i++) {
      this.varName[i].style.display = this.state;
    }
  } else {
    this.varName.style.display = this.state;
  }
}

let showMensage = elemById("imgInit-super-memory");
let divTimer = elemById("center");
let showLevel = elemById("h1-level");
let showNivSequence = elemById("h1-nivSequence");

const background = querySel("#fundo");
const painel = querySel("#control");
const painelTwo = querySel("#control-two");
const divOne = querySel(".super-genius-one");
const divTwo = querySel(".super-genius-two");
const divThree = querySel(".super-genius-three");

const divAbasPrim = querySel(".abas-prim");
const divGameOver = querySel(".div-game-over");
const h1Timer = querySel("#h1-time");
const h1Sequence = querySel("#h1-sequence");
const h1Rest = querySel("#h1-rest");
const btnRestart = querySel("#btn-restart");
let divCenter;

// Full Screen - Function by API of FullScreen in MDN
function toggleFullScreen() {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
function fullScreen() {
  toggleFullScreen();
}
// --------fim Full Screen

let inputConfig = [
  ["Dificuldade", 0],
  ["Velocidade", 0],
  ["Nível", "Fácil"],
  ["Modo", "Padrão"],
];

function getConfigValues() {
  for (let i = 0; i < inputConfig.length; i++) {
    let varInput = elemById("input" + (i + 1));
    for (let j = 1; j < 2; j++) {
      if (i == 2 || i == 3) {
        if (i == 2) {
          inputConfig[i][j] = arrayLevel[varInput.value];
        } else {
          inputConfig[i][j] = arrayMode[varInput.value];
        }
      } else {
        inputConfig[i][j] = parseInt(varInput.value);
      }
    }
  }
}

function setTouchesColors() {
  if (inputConfig[2][1] == "Fácil") {
    touchesColors = 8;
  } else if (inputConfig[2][1] == "Moderado") {
    touchesColors = 12;
  } else if (inputConfig[2][1] == "Difícil") {
    touchesColors = 16;
  } else if (inputConfig[2][1] == "Super") {
    touchesColors = 20;
  }
}

function setControlTwo() {
  for (let i = 0; i < inputConfig.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (j == 1) elemById("h2-" + i).innerHTML += " = ";
      elemById("h2-" + i).innerHTML += inputConfig[i][j];
    }
  }
}

function config(num) {
  playGeral("audioSave");
  let btnConfig = querySel("#input-config");
  let selectConfig = querySel("#selects");
  let selectConfigTwo = querySel("#selects-two");
  let divInputSubmit = elemById("btn-input-submit");

  if (num == 0) {
    setDisplay(btnConfig, "none");
    setDisplay(elemById("pop-config-ghost"), "block");
    setDisplay([divInputSubmit, selectConfig, selectConfigTwo], "inline-flex");
  } else if (num == 1) {
    let arrayVar = [
      divInputSubmit,
      selectConfig,
      selectConfigTwo,
      elemById("pop-config-ghost"),
    ];
    getConfigValues();
    setDisplay(btnConfig, "inline");
    setDisplay(arrayVar, "none");
  }
}

function hiddenDiv() {
  setDisplay([divOne, divTwo], "none");
}
let valueDefault = 0;
let varPersonal = 0;

function setColorOrder(touc, value) {
  for (let i = value; i < touc; i++) {
    colorOrder[i] = Math.floor(Math.random() * lentes);
  }
}

function setLightColor(num) {
  if (num == 1) {
    clickedOrder = [];
    for (let i in colorOrder) {
      let elementColor = createColorElement(colorOrder[i]);

      lightColor(elementColor, Number(i) + 1);
    }
  }
}

//cria as cores
let shuffleOrder = () => {
  touchesColors = touchesColors + inputConfig[0][1];

  if (inputConfig[3][1] == "Padrão") {
    touches++;
    valueDefault = touches - 1;
    setColorOrder(touches, valueDefault);
    setLightColor(1);
  } else if (inputConfig[3][1] == "Personalizado") {
    if (varPersonal == 0) {
      touches = 1;
      valueDefault = touches - 1;
      setColorOrder(touches, valueDefault);
      varPersonal++;
      setLightColor(1);
    }
  } else if (inputConfig[3][1] == "Randômico") {
    touches++;
    colorOrder = new Array(touches);
    valueDefault = 0;
    setColorOrder(touches, valueDefault);
    setLightColor(1);
  }
};

let numColor = 1000;

//acende a cor
let lightColor = (element, number) => {
  let speedLight = [900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400];
  number = number * speedLight[inputConfig[1][1]];
  randomColor();

  setTimeout(() => {
    if (numColor == element) {
      element.classList.add("selected2");
      offlightColor(element, number);
      activeDiv(element);
    } else {
      element.classList.add("selected");
      offlightColor(element, number);
      activeDiv(element);
      numColor = element;
    }
  }, number);
};
//Apaga a cor
function offlightColor(element) {
  setTimeout(() => {
    element.classList.remove("selected");
    element.classList.remove("selected2");
  }, 150);
  return null;
}
//Congratulations
function congrats(num) {
  if (num == 1) {
    touchesColors = touchesColors * 2;
    touches = 0;
    phase += 1;
    colorOrder = [];
    varPersonal = 0;
    lentes += 4;
    playGeral("audioVitory");
    effectBack(1);
  } else {
    playGeral("audioVitory");
    effectBack(2);
  }
}
function setGameOver() {
  playGeral("audioErro");

  setTimeout(() => {
    stopAudio(audioGame);
    setDisplay([showMensage, painelTwo, showLevel, showNivSequence], "none");
    gameOver(nivSequence, counterOk);
    counterOk = 0;
    playGeral("audioEnd");
  }, 250);
  counter = 0;
  lengthClicked = -1;
  touches = 0;
  touchesColors = 0;
}

let counter = 0;
let counterTemp = 0;
let counterOk = 0;
let lengthClicked = -1;
let passo = 0;
let countTime = 4;
let tamImg = 400;

//Checa os cliques do Modo Personalizado
function checkOrderPersonal(clic, numColor) {
  if (counterOk < colorOrder.length) {
    clickedOrder[clic] = numColor;
  }
  if (counterOk + 1 > colorOrder.length && varPersonal > 0) {
    colorOrder[clic] = numColor;
    counterOk = 0;
    clickedOrder = [];
    lengthClicked = -1;
    let intervalPersonalTwo = setInterval(() => {
      countTime -= 1;
      tamImg -= 100;
      if (countTime == 0) {
        countTime = 4;
        tamImg = 400;
        clearInterval(intervalPersonalTwo);
      } else {
        playGeral("audioNivel");
        divTimer.style.width = tamImg + "px";
        divTimer.style.height = tamImg + "px";
      }
    }, 500);
  } else {
    if (clickedOrder[clic] == colorOrder[clic]) {
      counterOk += 1;
    } else if (clickedOrder[clic] != colorOrder[clic]) {
      setGameOver();
    }
    if (counterOk == colorOrder.length) {
      if (touchesColors == counterOk && phase <= 3) {
        colorOrder = [];
        counterOk = 0;
        lengthClicked = -1;
        clickedOrder = [];

        if (phase == 3) congrats(2);
        else congrats(1);
      } else {
        let beep = 3;
        let intervalPersonal = setInterval(() => {
          playGeral("audioBeep");
          beep -= 1;
          if (beep == 0) clearInterval(intervalPersonal);
        }, 150);
      }
    }
  }
}

//Checa os cliques de Modos Padrão e Randômico
let checkOrder = (clic, numColor) => {
  if (counterOk < colorOrder.length) {
    clickedOrder[clic] = numColor;
    counter++;
  }

  if (clickedOrder[clic] == colorOrder[clic]) {
    counterOk += 1;
  } else if (clickedOrder[clic] != colorOrder[clic]) {
    setGameOver();
  }
  if (counterOk == colorOrder.length) {
    setDisplay(showMensage, "flex");
    showMensage.style.animation = "efecttMoviment .2s";
    showMensage.style.animationIterationCount = "8";

    let timeLevel = setInterval(function () {
      countTime -= 1;
      tamImg -= 100;

      if (countTime == 0) {
        showMensage.style.animation = "none";
        showMensage.style.animationIterationCount = "none";
        countTime = 4;
        tamImg = 400;
        counterTemp = counterOk;
        counter = 0;
        counterOk = 0;
        lengthClicked = -1;
        clickedOrder = [];
        showMensage.innerHTML = "Super Memory";
        clearInterval(timeLevel);
        if (touchesColors == touches && phase <= 3) {
          if (phase == 3) congrats(2);
          else congrats(1);
        } else {
          nextLevel();
        }
      } else {
        playGeral("audioNivel");
        divTimer.style.width = tamImg + "px";
        divTimer.style.height = tamImg + "px";
      }
    }, 500);
  }
};

let createColorElement = (color) => {
  for (let i = 0; i < listDivs.length; i++) {
    if (i == color) {
      return listDivs[i];
    }
  }
};

let tempColor = 0;

function onClicked(elem) {
  let result;
  for (let i = 0; i < listDivs.length; i++) {
    if (listDivs[i].id == elem) {
      tempColor = i;
      result = listDivs[i].id;
      lengthClicked++;
      createColorElement(tempColor).classList.add("selected");

      setTimeout(() => {
        createColorElement(tempColor).classList.remove("selected");
        if (inputConfig[3][1] == "Personalizado") {
          checkOrderPersonal(lengthClicked, tempColor);
        } else {
          checkOrder(lengthClicked, tempColor);
        }
      }, 250);
    }
  }
  return result;
}
document.onclick = function (event) {
  if (navigator.appName == "Microsoft Internet Explorer") {
    onClicked(window.event.srcElement.id);
  } else {
    onClicked(event.target.id);
  }
};

//funcao para proximo nivel do jogo
let nextLevel = () => {
  nivSequence++;
  showLevel.innerHTML = "Fase: " + phase;
  showNivSequence.innerHTML = "Nível: " + nivSequence;
  shuffleOrder(phase, 1);
};

//funcao para game over
let gameOver = (nivSequence, touchesOk) => {
  colorOrder = [];
  clickedOrder = [];
  h1Timer.innerHTML =
    "Chegou até a " + nivSequence + "ª Sequência da fase " + phase;
  if (inputConfig[3][1] == "Personalizado") {
    h1Rest.innerHTML = "O objetivo eram " + nivSequence + " toques + 1.";
  } else {
    h1Rest.innerHTML = "O objetivo eram " + nivSequence + " toques.";
  }

  h1Sequence.innerHTML = "Conseguiu " + touchesOk + " toques consecutivos";
  btnRestart.addEventListener("click", function () {
    location.reload();
  });
  setDisplay(divGameOver, "flex");
  contentPlay(2);
};

//funcao de inicio do jogo
let playGame = (num) => {
  touchesOk = 0;

  if (num == 0) {
    setDisplay(divAbasPrim, "flex");
    contentPlay(0);
    contentPlay(2);
    elemById("btn-play").focus();
  } else if (num == 1) {
    setControlTwo();
    setTouchesColors();
    setDisplay([divAbasPrim, divGameOver], "none");
    setDisplay([painel, painelTwo, showLevel, showNivSequence], "flex");
    stopAudio(audioInicio);
    playGeral("audioGame");
    nivSequence = 0;
    nextLevel();
  } else if (num == 2) {
    nivSequence = 0;
    nextLevel();
  }
};
// inicio do jogo => Vinheta de Introdução
function setPhase(num) {
  if (num == 1) {
    setDisplay([divTwo, divThree], "none");
    setFrequecy(4);
  } else if (num == 2) {
    setDisplay(divTwo, "grid");
    setDisplay(divThree, "none");
    setFrequecy(8);
  } else if (num == 3) {
    setDisplay([divTwo, divThree], "grid");
    setFrequecy(12);
  }

  return null;
}

// ---------------------------------------------------------------------------------------------
function unlockAudioContext(audioCtx) {
  if (context.state !== "suspended") return;
  const b = document.body;
  const events = ["touchstart", "touchend", "mousedown", "keydown"];
  events.forEach((e) => b.addEventListener(e, unlock, false));
  function unlock() {
    audioCtx.resume().then(clean);
  }
  function clean() {
    events.forEach((e) => b.removeEventListener(e, unlock));
  }
}
function start() {
  if (!context) {
    context = new (window.AudioContext || window.webkitAudioContext)();
  }

  unlockAudioContext(context);
  oscillator = context.createOscillator();
  contextGain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  oscillator.connect(contextGain);
  contextGain.connect(context.destination);
  oscillator.start(0);
}

function stop() {
  start();
  contextGain.gain.exponentialRampToValueAtTime(
    0.00001,
    context.currentTime + x
  );
}

function activeDiv(element) {
  for (let i = 0; i < listDivs.length; i++) {
    if (element.id == listDivs[i].id) {
      frequency = listFreqs[i];

      stop();
      return null;
    }
  }
}

function setFrequecy(value, num) {
  for (let i = 0; i < value; i++) {
    listDivs[i].addEventListener("click", function () {
      frequency = listFreqs[i];
      stop();
    });
  }

  return null;
}

function presentation(num) {
  if (num == 1) {
    setDisplay(
      [
        divAbasPrim,
        divGameOver,
        elemById("aba-initial"),
        elemById("content-init"),
        elemById("footer-rules"),
        elemById("btn-input-submit"),
        elemById("pop-config-ghost"),
      ],
      "none"
    );
    setDisplay([elemById("aba-1"), elemById("aba-2")], "flex");
  }

  playGeral("audioInicio");

  let element;
  let number = 0;

  setTimeout(() => {
    for (let i = 0; i < listDivs.length; i++) {
      number++;
      setTimeout(() => {
        randomColor();
        listDivs[i].classList.add("selected");
        offlightColor(listDivs[i]);
      }, number * 200);
    }

    number++;

    setTimeout(() => {
      if (number == 13) {
        setPhase(1);
        playGame(0);
      }
    }, number * 250);
  }, 250);
}
function randomBack(element, nameFile, total, file) {
  let num = Math.ceil(Math.random() * total);
  element.style.backgroundImage = "url('./img/" + nameFile + num + file + "')";
}

function effectBack(num) {
  var elementFundoTela = elemById("tela");
  var divCongrats = elemById("div-congrats");
  var h1TimeCongrats = elemById("h1-time-congrats");
  var h1Congrats = elemById("h1-congrats");

  var totalBack = 9;
  var totalCongrats = 5;
  if (num == 0) {
    randomBack(elementFundoTela, "formas0", totalBack, ".png");
  } else if (num == 1) {
    h1Congrats.innerHTML = "Fase " + phase + " em...";
    setDisplay(divCongrats, "flex");
    randomBack(divCongrats, "cores", totalCongrats, ".gif");
    let seconds = 10;
    let timeCongrats = setInterval(() => {
      if (seconds == 0) {
        seconds = 10;

        clearInterval(timeCongrats);
        colorOrder = [];
        clickedOrder = [];
        nivSequence = 0;
        touchesOk = 0;
        h1Congrats.innerHTML = "Fase " + (phase + 1) + " em...";
        setDisplay(divCongrats, "none");
        h1TimeCongrats.innerHTML = "";
        stopAudio(audioVitory);
        stopAudio(audioBeep);
        setPhase(phase);
        nextLevel();
      } else {
        playGeral("audioBeep");
        h1Congrats.innerHTML = "Fase " + phase + " em...";
        if (seconds == 10) h1TimeCongrats.innerHTML = "" + seconds;
        else h1TimeCongrats.innerHTML = "0" + seconds;
        seconds--;
      }
    }, 1000);
  } else if (num == 2) {
    h1Congrats.innerHTML = "Jogo Zerado!!!";
    setDisplay(divCongrats, "flex");
    randomBack(divCongrats, "cores", totalCongrats, ".gif");
    let seconds = 10;
    let timeCongrats = setInterval(() => {
      if (seconds == 0) {
        seconds = 10;

        clearInterval(timeCongrats);
        h1Congrats.innerHTML = "Fase " + (phase + 1) + " em...";
        setDisplay(divCongrats, "none");
        h1TimeCongrats.innerHTML = "";
        stopAudio(audioVitory);
        stopAudio(audioBeep);
        location.reload();
      } else {
        playGeral("audioBeep");
        h1Congrats.innerHTML = "Jogo Zerado!!!";
        if (seconds == 10) h1TimeCongrats.innerHTML = "" + seconds;
        else h1TimeCongrats.innerHTML = "0" + seconds;
        seconds--;
      }
    }, 1000);
  }
}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function randomColor() {
  var fundoBackThree = elemById("back-three");
  fundoBackThree.style.backgroundImage =
    "linear-gradient(to top," +
    "rgb(" +
    random(0, 255) +
    "," +
    random(0, 255) +
    "," +
    random(0, 255) +
    ")" +
    ", " +
    "rgb(" +
    random(0, 255) +
    "," +
    random(0, 255) +
    "," +
    random(0, 255) +
    ")" +
    ", " +
    "rgb(" +
    random(0, 255) +
    "," +
    random(0, 255) +
    "," +
    random(0, 255) +
    ")" +
    "60%)";
}

function initial() {
  setDisplay([elemById("aba-1"), elemById("aba-2")], "none");
  setDisplay(divAbasPrim, "flex");
  effectBack(0);
  contentPlay(3);
}
initial();
