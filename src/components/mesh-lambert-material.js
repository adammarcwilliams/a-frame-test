/* global AFRAME */
/* global THREE */

AFRAME.registerComponent('mesh-lambert-material', {

  schema: {
    color: { default: '#00ffff' },
    side: { default: 'back' },
    wireframe: { default: 'true' }
  },

  init: function () {
    var data = this.data;
    console.log(data);

    var color = new THREE.Color(data.color);

    var side;
    switch (data.side.toLowerCase()) {
      case 'back':
        side = THREE.BackSide;
        break;
      case 'double':
        side = THREE.DoubleSide;
        break;
      default:
        side = THREE.FrontSide;
    }

    var wireframe = false;
    if (data.wireframe.toLowerCase() === 'true') wireframe = true;

    console.log('color: ', color.getHex(), ' side: ', side, ' wireframe: ', wireframe);

    this.material = this.el.getOrCreateObject3D('mesh').material = new THREE.MeshLambertMaterial({
      color: color.getHex(),
      side: side,
      wireframe: wireframe
    });
  }
});
