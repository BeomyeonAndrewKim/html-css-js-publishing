var clicks = 0;
$("#next").click(function() { clicks++;
  $('.photo-slide-count').html(clicks); });