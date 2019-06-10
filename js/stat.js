'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP * 10;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var randomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = (names[i] === 'Вы') ? '#ff0000' : 'rgba(0, 0, 255, ' + randomNumber(0.3, 1) + ')';

    ctx.fillRect(CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, (barHeight + GAP * 7 - (MAX_BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);

    renderText(ctx, names[i], CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP * 6 + barHeight + GAP);
  }
};
