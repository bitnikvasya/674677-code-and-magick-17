'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var generateWizard = function () {
  var randFirstName = Math.floor(Math.random() * WIZARD_FIRST_NAMES.length);
  var randSecondName = Math.floor(Math.random() * WIZARD_SECOND_NAMES.length);
  var randCoatColor = Math.floor(Math.random() * WIZARD_COAT_COLORS.length);
  var randEyeColor = Math.floor(Math.random() * WIZARD_EYE_COLORS.length);
  var randWizard = {
    name: WIZARD_FIRST_NAMES[randFirstName] + ' ' + WIZARD_SECOND_NAMES[randSecondName],
    coatColor: WIZARD_COAT_COLORS[randCoatColor],
    eyeColor: WIZARD_EYE_COLORS[randEyeColor]
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
