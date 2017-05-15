



$('dt').on('click', function () {
  $('dd').slideUp(200);
  $(this).next().slideDown(800);
});