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

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = '#ff0000';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }

    ctx.fillRect(CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, (barHeight + GAP * 7 - (MAX_BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';

    ctx.fillText(names[i], CLOUD_X + GAP * 4 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP * 6 + barHeight + GAP);
  }
};
