/* global AFRAME */

AFRAME.registerComponent('rotate-on-click', {

  schema: {
    to: {default: '45 45 45'}
  },

  init: function () {
    this.el.addEventListener('click', this.handleRotation.bind(this));
  },

  handleRotation: function () {
    var data = this.data;
    var to = AFRAME.utils.coordinates.parse(data.to);
    var currentRotation = this.el.getAttribute('rotation');
    var newRotation = this.add(currentRotation, to);

    this.el.setAttribute('rotation', newRotation);
  },

  add: function (v1, v2) {
    var x = v1.x + v2.x;
    var y = v1.y + v2.y;
    var z = v1.z + v2.z;

    return {
      x: x,
      y: y,
      z: z
    };
  }
});
