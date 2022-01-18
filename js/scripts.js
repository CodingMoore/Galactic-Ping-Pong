// Business Logic

// UI Logic
$(function() {
  alert("Test");
  const element = document.getElementById("mapWrapper");
  const panzoom = Panzoom(element, {
  // options here
  maxScale: 2,
  minScale:  1
  });
  // enable mouse wheel
  const parent = element.parentElement;
  parent.addEventListener('wheel', panzoom.zoomWithWheel);
  console.log(element);
  console.log(panzoom);
  console.log(parent);
});