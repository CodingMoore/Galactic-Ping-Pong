
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

    // Does the flipping and highlight
    if($("#svgWrapper").hasClass("plateflipped")) {
      $("#svgWrapper").removeClass("plateflipped");
      $("#plateFlipButton").css("background-color", "lightgray");
    } 
    else {
      $("#svgWrapper").addClass("plateflipped");
      $("#plateFlipButton").css("background-color", "rgb(134, 134, 134)");
    }
    
  });


  /////////////////////////////////
  ///Show Background Image Logic///
  /////////////////////////////////

  $("#backgroundImageButton").click(function() {

    if($("#skyImageBox").hasClass("skyImageOn")) {
      $("#skyImageBox").removeClass("skyImageOn");
      $("#skyImageBox").hide();
      $("#backgroundImageButton").css("background-color", "lightgray");
    }
    else {
      $("#skyImageBox").addClass("skyImageOn");
      $("#skyImageBox").show();
      $("#backgroundImageButton").css("background-color", "rgb(134, 134, 134)");
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

