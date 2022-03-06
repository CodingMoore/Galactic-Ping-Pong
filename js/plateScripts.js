
// $(function() {

//   //If you want to run scripts from the plateScripts.js file, you will need to comment out the window.onload in the <scrip> section at the bottom of the html file.  You will also probably need to move all your scripts from there to here. Trying to use scripts both in the html and the plateScripts.js file cuases jquery reference errors because things won't load in the correct order.

//   /////////////////////////
//   ///Reset Panzoom Logic///
//   /////////////////////////
//   $("#plateResetPanZoomButton").click(function() {
//     panzoom.reset();
//   });


//   //////////////////////
//   ///Plate Flip Logic///
//   //////////////////////
//   $("#plateFlipButton").click(function() {

//     // Triggers a plate reset so that the flip animates
//     panzoom.reset();

//     // Does the flipping and highlight
//     if($("#svgWrapper").hasClass("plateflipped")) {
//       $("#svgWrapper").removeClass("plateflipped");
//       $("#plateFlipButton").css("background-color", "lightgray");
//     } 
//     else {
//       $("#svgWrapper").addClass("plateflipped");
//       $("#plateFlipButton").css("background-color", "rgb(134, 134, 134)");
//     }
    
//   });


//   /////////////////////////////////
//   ///Show Background Image Logic///
//   /////////////////////////////////

//   $("#backgroundImageButton").click(function() {

//     if($("#skyImageBox").hasClass("skyImageOn")) {
//       $("#skyImageBox").removeClass("skyImageOn");
//       $("#skyImageBox").hide();
//       $("#backgroundImageButton").css("background-color", "lightgray");
//     }
//     else {
//       $("#skyImageBox").addClass("skyImageOn");
//       $("#skyImageBox").show();
//       $("#backgroundImageButton").css("background-color", "rgb(134, 134, 134)");
//     }

//     if($("#backgroundFill").hasClass("fillOn")) {
//       $("#backgroundFill").removeClass("fillOn")
//       $("#backgroundFill").hide();
//     }
//     else {
//       $("#backgroundFill").addClass("fillOn")
//       $("#backgroundFill").show();
//     }

//   });

// });

