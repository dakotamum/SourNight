MyGame.objects.player = function (spec) {
  "use strict";
  // constants
  const velocityConstant = 0.000175;

  let center = {
    x: 0.5,
    y: 0.5,
  };
  let radius = 0.02;
  let fill = "#a065cd";
  let stroke = "#ddf8d0";
  let angle = 0;

  function updateAngle(direction) {
    switch (direction) {
      case "up-left":
        angle = (5 * Math.PI) / 4;
        break;
      case "up-right":
        angle = (7 * Math.PI) / 4;
        break;
      case "down-left":
        angle = (3 * Math.PI) / 4;
        break;
      case "down-right":
        angle = Math.PI / 4;
        break;
      case "up":
        angle = (3 * Math.PI) / 2;
        break;
      case "down":
        angle = Math.PI / 2;
        break;
      case "left":
        angle = Math.PI;
        break;
      case "right":
        angle = 0;
        break;
    }
  }

  function move(elapsedTime) {
    center.x += elapsedTime * velocityConstant * Math.cos(angle);
    center.y += elapsedTime * velocityConstant * Math.sin(angle);
  }

  let api = {
    updateAngle: updateAngle,
    move: move,
    get center() {
      return center;
    },
    set center(val) {
      center = val;
    },
    get radius() {
      return radius;
    },
    set radius(val) {
      radius = val;
    },
    get angle() {
      return angle;
    },
    set angle(val) {
      angle = val;
    },
    get fill() {
      return fill;
    },
    get stroke() {
      return stroke;
    },
  };
  return api;
};