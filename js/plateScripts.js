
$(function() {

  /////////////////////////
  ///Reset Panzoom Logic///
  /////////////////////////
  $("#plateResetPanZoomButton").click(function() {
    panzoom.reset();
  });


  //////////////////////
  ///Plate Flip Logic///
  //////////////////////
  $("#plateFlipButton").click(function() {

    // Triggers a plate reset so that the flip animates
    panzoom.reset();

    // Does the flipping
    if($("#svgWrapper").hasClass("plateflipped")) {
      $("#svgWrapper").removeClass("plateflipped")
    } 
    else {
      $("#svgWrapper").addClass("plateflipped")
    }
    
  });


  /////////////////////////////////
  ///Show Background Image Logic///
  /////////////////////////////////

  $("#backgroundImageButton").click(function() {

    if($("#skyImageBox").hasClass("skyImageOn")) {
      $("#skyImageBox").removeClass("skyImageOn");
      $("#skyImageBox").hide();
    }
    else {
      $("#skyImageBox").addClass("skyImageOn");
      $("#skyImageBox").show();
    }

    if($("#backgroundFill").hasClass("fillOn")) {
      $("#backgroundFill").removeClass("fillOn")
      $("#backgroundFill").hide();
    }
    else {
      $("#backgroundFill").addClass("fillOn")
      $("#backgroundFill").show();
    }

  });

});

