'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizard = function () {
  var randWizard = {
    name: getRandomElement(WIZARD_FIRST_NAMES) + ' ' + getRandomElement(WIZARD_SECOND_NAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyeColor: getRandomElement(WIZARD_EYE_COLORS)
  };

  return randWizard;
};

var wizards = [];
var MAX_WIZARDS = 4;

for (var j = 0; j < MAX_WIZARDS; j++) {
  wizards.push(generateWizard());
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupPlayer = document.querySelector('.setup-player');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var fireball = setupPlayer.querySelector('.setup-fireball-wrap');
var wizardEyesInput = setupPlayer.querySelector('[name="eyes-color"]');
var wizardCoatInput = setupPlayer.querySelector('[name="coat-color"]');
var fireballInput = setupPlayer.querySelector('[name="fireball-color"]');

var onWizardEyesClick = function () {
  var getRandomEyesColor = getRandomElement(WIZARD_EYE_COLORS);
  wizardEyes.style.fill = getRandomEyesColor;
  wizardEyesInput.value = getRandomEyesColor;
};

var onWizardCoatClick = function () {
  var getRandomCoatColor = getRandomElement(WIZARD_COAT_COLORS);
  wizardCoat.style.fill = getRandomCoatColor;
  wizardCoatInput.value = getRandomCoatColor;
};

var onFireballClick = function () {
  var getRandomFireballColor = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = getRandomFireballColor;
  fireballInput.value = getRandomFireballColor;
};

wizardEyes.addEventListener('click', onWizardEyesClick);
wizardCoat.addEventListener('click', onWizardCoatClick);
fireball.addEventListener('click', onFireballClick);
