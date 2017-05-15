


$('img').on('click', function (){
    var url = $(this).attr('src');
    $('.modal img').attr('src', url);
    $('.modal').fadeIn();
});

$('.modal').on('click', function () {
  $(this).fadeOut();
})