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
  maxScale: 3,
  minScale: .75,
  step: 1,
  // ,contain: "outside"
  });

  // first value is starting zoom level
  // panzoom.zoom(1, { animate: true })

  // enable mouse wheel
  const parent = element.parentElement;
  parent.addEventListener('wheel', panzoom.zoomWithWheel);


  //PM-Studio panzoom
  const element2 = document.getElementById("mpSvgMapWrapper");
  const panzoom2 = Panzoom(element2, {
  // options here
  maxScale: 3,
  minScale: .75,
  step: 1,
  // ,contain: "outside"
  });
  
  // enable mouse wheel
  const parent2 = element2.parentElement;
  parent2.addEventListener('wheel', panzoom2.zoomWithWheel);
  
  
  /////////////////////////
  ///Div Hide/Show Logic///
  /////////////////////////
  
  $("#gsGalleryLink").css("border-color", "rgb(17, 98, 248)");
  $("#mpStudioLink").css( {opacity: .3} );
  $("#mpStudioLink").css( "border-style", "dashed");
  $("#mpStudioLink").css("border-color", "rgb(17, 98, 248)");

  $("#gsGalleryAnchor").click(function() {
    $("#mpDiv").hide();
    $("#gsDiv").show();
    $("#gsGalleryLink").css( "border-style", "solid");
    $("#mpStudioLink").css( "border-style", "dashed");
    $("#gsGalleryLink").css("border-color", "rgb(17, 98, 248)");
    $("#gsGalleryLink").css( {opacity: 1} );
    $("#mpStudioLink").css( {opacity: .3} );
  });
  
  $("#mpStudioAnchor").click(function() {
    $("#gsDiv").hide();
    $("#mpDiv").show();
    $("#gsGalleryLink").css( "border-style", "dashed");
    $("#mpStudioLink").css( "border-style", "solid");
    $("#mpStudioLink").css("border-color", "rgb(17, 98, 248)");
    $("#gsGalleryLink").css( {opacity: .3} );
    $("#mpStudioLink").css( {opacity: 1} );
  });
  
  
  /////////////////////////
  ///Scroll to Div Logic///
  /////////////////////////
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) +']');

    const targetAbsoluteBottom = target.offset().top + target.outerHeight(true);
    const visibleAreaHeight = visualViewport.height - $("#footer").height();
    const targetRelativeBottom = ($(window).scrollTop() + visibleAreaHeight) - targetAbsoluteBottom;

    if (target.length) {

      // Checks to see if we need to scroll to see the bottom of the div.
      // If we don't need to scroll, and we can still click the button, then
      // the div must already be fitting on the screen and there is nothing to do.
      if (targetRelativeBottom > 0) {

          // Do Nothing!
 
      } 
      // if the bottom of the div is below the screen, but the entire div
      // will fit in the visible area of the the screen, scroll down until the
      // bottom of the div is at the bottom of the visible area of the screen (+10px).
      else if (target.height() < visibleAreaHeight) {
        $('html,body').animate({
          scrollTop: (targetAbsoluteBottom - visibleAreaHeight) + 10
        }, 1000);

      }
      // if the div is below the screen, and is too large to fit in the visible
      // area of the screen, scroll down until the top of the div (+ 40px) is
      // at the top of the screen.
      else {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
      }
      
      return false;
    }
  });

  /////////////////////////
  ///Scroll to Top Logic///
  /////////////////////////
  $("#topOfPageButton").click(function() {
    $("html, body").animate({scrollTop : 0},1000);
    return false;
  });



  /////////////////////////
  ///Reset Panzoom Logic///
  /////////////////////////
  $("#gsResetPanZoomButton").click(function() {
    panzoom.reset();
  });

  $("#mpResetPanZoomButton").click(function() {
    panzoom2.reset();
  });


  ///////////////////////////////////////////
  ///Plate label value & positioning logic///
  ///////////////////////////////////////////

  // Creates an array of all elements with the .plateIcon class
  const plateArray = [...$(".plateIcon")]


  plateArray.forEach( plate => {
    
    // for each plate in the array, take the cx and cy values of the circle, and apply them to the x and y values of their sibling element (the <tex>).
    $(plate).siblings().attr("x", $(plate).attr("cx"));
    $(plate).siblings().attr("y", $(plate).attr("cy"));
    
    // rx and ry values for ellipses
    // If the plate has an rx attribute, then it must be an ellipse, so run the code.
    if($(plate).attr("rx")){
      // Offsets the text from the center
      $(plate).siblings().attr("y", (parseInt($(plate).attr("cy")) - 8).toString());

      // Rotates text to match rotation of ellipse
      $(plate).siblings().attr("transform-origin", "center");
      $(plate).siblings().attr("transform", $(plate).attr("transform"));
    }

    // for each plate in the array, label the plate using the plate number that is pulled out of the parent <a> href value
    const plateText = $(plate).parent().attr("href").slice(9, -5);

    $(plate).siblings().text(plateText);

  });


});