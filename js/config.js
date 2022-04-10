const arrayMode = ["Padrão", "Personalizado", "Randômico"];
const arrayLevel = ["Fácil", "Moderado", "Difícil", "Super"];
let step = 0;

function activeInput(inputElement, divElement) {
  playGeral("audioBeep");
  let elem = document.getElementById(inputElement);
  let newInput = inputElement;
  elem.addEventListener(newInput, rangeValue);
  return rangeValue(divElement, elem);
}

var rangeValue = function (divDisplay, elem) {
  if (divDisplay == ".value-level" || divDisplay == ".value-mode") {
    if (divDisplay == ".value-mode") {
      var newValue = arrayMode[elem.value];
    } else {
      var newValue = arrayLevel[elem.value];
    }
  } else {
    var newValue = elem.value;
  }

  var target = document.querySelector(divDisplay);

  target.innerHTML = newValue;
};
