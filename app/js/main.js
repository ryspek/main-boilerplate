$(document).ready(function() {
 
  $("#main-slider").owlCarousel({
  	singleItem: true,
  	navigation: true,
  	navigationText: ["prev", "next"],
  	pagination: true

  });

  $("#reasons-slider").owlCarousel({
  	pagination: false,
  	navigation: true,
  	navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
 
});
