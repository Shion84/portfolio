$(function() {
  var offsetY = 0;
  var time = 500;

      $('a[href^="#"]').on('click', function(){
          var href = $(this).attr('href');
          if(href !== '#'){ $('html, body').stop().animate({scrollTop: $(href === '#top' ? 'html' : href).offset().top}, 500); return false; }
      });


  $('body').fadeIn(3000);
});


$(function(){
  fade('.toggleWrap');
});

function fade(elm){
  var $fade = $(elm),
      $body = $('body');

  $fade.addClass('hide');

  $('#toggle').on('click', function(){
    $fade.toggleClass('hide').addClass('animation');
    $('.trigger').toggleClass('active');

    if ($fade.hasClass('hide')) {
      $body.removeClass('no-scroll').off('.noScroll');
    } else {

      $body.addClass('no-scroll').on('touchmove.noScroll', function(e){
        e.preventDefault();
      });
    }
  });

  $('.navItem').on('click', function(){
    $fade.toggleClass('hide');
    $('.trigger').toggleClass('active');
    $body.removeClass('no-scroll').off('.noScroll');
  });
}



$(function(){
      $('.popup-image').magnificPopup({
      type: 'image'
  });
});
