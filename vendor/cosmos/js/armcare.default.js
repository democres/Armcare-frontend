$(window).resize(function() {
  if ($(window).width() >= 1440) {
    if ($("div").attr('class') == "app") {
      $("#sidebar-toggle i").attr('class', 'ti-close');
    } else {
      $("#sidebar-toggle i").attr('class', 'menuIcon');
    }
  }
  if ($(window).width() < 1440) {
    if ($("div").attr('class') == "app") {
       $("#sidebar-toggle i").attr('class', 'menuIcon');
    } else {
       $("#sidebar-toggle i").attr('class', 'ti-close');
    }
  }
});
