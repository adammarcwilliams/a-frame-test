/* global AFRAME */
/* global THREE */

AFRAME.registerGeometry('tube', {

  schema: {
    points: { default: [
      [68.5, 185.5],
      [1, 262.5],
      [270.9, 281.9],
      [345.5, 212.8],
      [178, 155.7],
      [240.3, 72.3],
      [153.4, 0.6],
      [52.6, 53.3],
      [68.5, 185.5]] },
    segments: { default: 300 },
    radius: { default: 2 },
    radialSegments: { default: 20 },
    closed: { default: true }
  },

  init: function (data) {
    console.log('tube data: ', data);

    // Convert the array of points into vertices
    for (var i = 0; i < data.points.length; i++) {
      var x = data.points[i][0];
      var y = 0;
      var z = data.points[i][1];
      data.points[i] = new THREE.Vector3(x, y, z);
    }

    // Create a path from the points
    var path = new THREE.CatmullRomCurve3(data.points);

    this.geometry = new THREE.TubeGeometry(path, data.segments, data.radius, data.radialSegments, data.closed);
  }
});
