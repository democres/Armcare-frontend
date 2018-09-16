var lastWidth = $(window).width();
if (lastWidth <= 500) {
  drawMobile();
}
$(window).resize(function() {
  if ($(window).width() != lastWidth) {
    lastWidth = $(window).width();
  } else {
    return;
  }
  if ($(window).width() <= 500) {
    drawMobile();
  } else {
    $("tr i").attr('data-toggle', 'dropdown');
    $("i").attr('data-target', '');
  }
});

function drawMobile() {
$("tr i").attr('data-toggle', 'modal');
$("tr i").attr('data-target', '#exampleModalCenter');
}
