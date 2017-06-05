

$('.slide:last-child').prependTo('.inner');

$('#next').on('click', function (){
    $('.inner').animate({
      left: "-=400px"
    }, {
      complete: function (){
        $('.slide:first-child').appendTo('.inner');
        $('.inner').css('left', '+=400px');
      }
    });

})

$('#prev').on('click', function (){
  $('.inner').animate({
    left: '+=400px'
  }, {
    complete: function (){
      $('.slide:last-child').prependTo('.inner');
      $('.inner').css('left', '-=400px');
    }
  });

})