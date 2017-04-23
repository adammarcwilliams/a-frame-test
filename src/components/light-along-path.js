/* global AFRAME */

AFRAME.registerComponent('light-along-path', {

  schema: {
    targetElement: {type: 'selector'},
    speed: {type: 'number', default: 0.001},
    offset: {type: 'number', default: 0.05}
  },

  init: function () {
    var targetElement = this.data.targetElement;
    console.log(this.el.object3D);
    this.speed = this.data.speed;
    this.offset = this.data.offset;
    this.path = targetElement.getObject3D('mesh').geometry.metadata.parameters.path;
    this.percentage = 0;
    this.position = this.path.getPointAt((this.percentage + this.offset) % 1);

    // TODO no matter what position I rotate the light it stays the same in the scene
    this.el.setAttribute('position', {x: this.position.x, y: this.position.y, z: this.position.z});
  },

  tick: function () {
    this.percentage += this.speed;
    this.position = this.path.getPointAt((this.percentage + this.offset) % 1);

    this.el.setAttribute('position', {x: this.position.x, y: this.position.y, z: this.position.z});
  }
});
