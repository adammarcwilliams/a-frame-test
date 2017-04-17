/* global AFRAME */

AFRAME.registerComponent('scale-on-mouseenter', {

  schema: {
    to: {default: '2.5 2.5 2.5'},
    revertOnMouseleave: {default: true}
  },

  init: function () {
    var data = this.data;
    var originalScale = this.el.getAttribute('scale');

    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
    });

    if (data.revertOnMouseleave) {
      this.el.addEventListener('mouseleave', function () {
        this.setAttribute('scale', originalScale);
      });
    }
  }
});
