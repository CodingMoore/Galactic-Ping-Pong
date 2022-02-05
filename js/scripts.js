// Business Logic

// UI Logic
$(function() {



  ///////////////////
  ///panzoom logic///
  ///////////////////

  //GS-Gallery panzoom
  const element = document.getElementById("gsMapWrapper");
  const panzoom = Panzoom(element, {
  // options here
  maxScale: 2,
  minScale:  1
  });
  // enable mouse wheel
  const parent = element.parentElement;
  parent.addEventListener('wheel', panzoom.zoomWithWheel);


  //PM-Studio panzoom
  const element2 = document.getElementById("pmMapWrapper");
  const panzoom2 = Panzoom(element2, {
  // options here
  maxScale: 2,
  minScale:  1
  });
  // enable mouse wheel
  const parent2 = element2.parentElement;
  parent2.addEventListener('wheel', panzoom2.zoomWithWheel);


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

});