// Business Logic

// UI Logic
$(function() {



  ///////////////////
  ///panzoom logic///
  ///////////////////
  const element = document.getElementById("mapWrapper");
  const panzoom = Panzoom(element, {
  // options here
  maxScale: 2,
  minScale:  1
  });
  // enable mouse wheel
  const parent = element.parentElement;
  parent.addEventListener('wheel', panzoom.zoomWithWheel);

});