
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



    // let xScale = panzoom.getScale(5);
    // console.log(xScale);

    // Panzoom(element, {
    //   setTransform: (_, { scale, x, y }) => {
    //     panzoom.setStyle('transform', `scale(-${scale},${scale})`)
    //   }
    // });

    //Does the flipping
    if($("#svgWrapper").hasClass("plateflipped")) {
      //$("#svgWrapper").css("transform", "scale(1,1)");
      $("#svgWrapper").removeClass("plateflipped")
    } 
    else {
      //$("#svgWrapper").css("transform", "scale(-1,1)");
      //$("#svgImage").css("transform-origin", "50% -50%");
      $("#svgWrapper").addClass("plateflipped")
    }
    
  });

});