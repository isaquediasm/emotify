// put your code here
// remember, you can use modules with browserify
var hasClosedModal = false;

function scrollTop(target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
}

$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.subscribe-bar .close').click();   // esc
});

$('.open').click(function() {
  $('.header-menu').addClass('show');
});

$('.close, .menu li').click(function() {
  $('.header-menu').removeClass('show');
});

$('.input').focusin(function() {
  $(this).children('.label').addClass('show');
})

$('.input').focusout(function() {
  if ($(this).children('input').val().length < 1)
    $(this).children('.label').removeClass('show');
})

$('.subscribe-bar .call, .menu .button').click(function() {
  $('.subscribe-bar')
    .addClass('open')
    .removeClass('show');
});

$('.subscribe-bar .close').click(function() {
  hasClosedModal = $('.subscribe-bar').hasClass('show');

  $('.subscribe-bar')
    .removeClass('open')
    .removeClass('show');
});


function detectScroll(e) {
  var height = window.innerHeight;
  
  if (window.pageYOffset > height && !$('.subscribe-bar').hasClass('open') && !hasClosedModal) {
    $('.subscribe-bar').addClass('show');
  } else {
    $('.subscribe-bar').removeClass('show');
  }
}

window.onscroll = detectScroll;