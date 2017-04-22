/* global AFRAME */

AFRAME.registerComponent('move-along-path', {

  schema: {
    targetElement: {type: 'selector'},
    speed: {type: 'number', default: 0.001}
  },

  init: function () {
    var targetElement = this.data.targetElement;
    this.speed = this.data.speed;
    this.path = targetElement.getObject3D('mesh').geometry.metadata.parameters.path;
    console.log('path at move-along-path: ', this.path);
    this.percentage = 0;
    this.position = this.path.getPointAt(this.percentage % 1);
    this.lookPosition = this.path.getPointAt((this.percentage + 0.01) % 1);

    this.el.setAttribute('position', {x: this.position.x, y: this.position.y, z: this.position.z});
    this.el.object3D.lookAt(this.lookPosition);
  },

  tick: function () {
    this.percentage += this.speed;
    this.position = this.path.getPointAt(this.percentage % 1);
    this.lookPosition = this.path.getPointAt((this.percentage + 0.01) % 1);
    this.el.setAttribute('position', {x: this.position.x, y: this.position.y, z: this.position.z});
    this.el.object3D.lookAt(this.lookPosition);
  }
});
