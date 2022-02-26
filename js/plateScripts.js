
$(function() {

  /////////////////////////
  ///Reset Panzoom Logic///
  /////////////////////////
  $("#plateResetPanZoomButton").click(function() {
    panzoom.reset();
  });


  // Plate Flip
  $("#plateFlipButton").click(function() {

    if($("#svgWrapper").hasClass("plateflipped")) {
      $("#svgWrapper").css("transform", "scale(1,1)");
      $("#svgWrapper").removeClass("plateflipped")
    } 
    else {
      $("#svgWrapper").css("transform", "scale(-1,1)");
      $("#svgWrapper").addClass("plateflipped")
    }
    
  });

});