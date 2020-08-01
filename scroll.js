// NAVBAR TRANSPARENT
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').removeClass('transparent');
    } else {
      $('nav').addClass('transparent');
    }
  });

// NAVBAR HOVER UNDERLINE
$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});