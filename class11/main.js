



$('.box2').on('click', function () {
  $(this).addClass('animacija');
})

$('.box3').on('click', function () {
  // $(this).animate({
  //   width: 200,
  // }, {
  //   duration: 2000,
  //
  // }).animate({
  //
  //   height: 50
  // });

  $(this).animate({
    width: 200,
    height: 50
  }, { duration: 2000 })
})
