// Business Logic

// UI Logic
$(function() {


  // ////////////////////////////
  // ///panzoom logic (anvaka)///
  // ////////////////////////////

  // const element = document.getElementById("gsSvgMapWrapper");
  // panzoom(element, {
  //   zoomSpeed: .2,
  //   bounds: true,
  //   boundsPadding: .8
  // });



  ///////////////////////////
  ///panzoom logic (timmy)///
  ///////////////////////////

  //GS-Gallery panzoom
  const element = document.getElementById("gsSvgMapWrapper");
  const panzoom = Panzoom(element, {
  // options here
  maxScale: 2,
  minScale: 1
  // ,contain: "outside"
  });

  // first value is starting zoom level
  panzoom.zoom(1, { animate: true })

  // enable mouse wheel
  const parent = element.parentElement;
  parent.addEventListener('wheel', panzoom.zoomWithWheel);


  //PM-Studio panzoom
  const element2 = document.getElementById("pmSvgMapWrapper");
  const panzoom2 = Panzoom(element2, {
  // options here
  maxScale: 2,
  minScale: 1
  // ,contain: "outside"
  });
  
  // enable mouse wheel
  const parent2 = element2.parentElement;
  parent2.addEventListener('wheel', panzoom2.zoomWithWheel);
  
  
  /////////////////////////
  ///Div Hide/Show Logic///
  /////////////////////////
  
  $("#gsGalleryLink").css("border-color", "blue");

  $("#gsGalleryAnchor").click(function() {
    $("#mpDiv").hide();
    $("#gsDiv").show();
    $("#mpStudioLink").css("border-color", "black");
    $("#gsGalleryLink").css("border-color", "blue");
  });
  
  $("#mpStudioAnchor").click(function() {
    $("#gsDiv").hide();
    $("#mpDiv").show();
    $("#gsGalleryLink").css("border-color", "black");
    $("#mpStudioLink").css("border-color", "blue");
  });
  
  
  /////////////////////////
  ///Scroll to Div Logic///
  /////////////////////////
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
  });

  /////////////////////////
  ///Reset Panzoom Logic///
  /////////////////////////
  $("#resetPanZoomButton").click(function() {
    panzoom.reset();
  });

});