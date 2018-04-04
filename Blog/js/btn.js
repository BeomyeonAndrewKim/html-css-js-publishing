var clicks = 1;
$(".next").click(function() {
  if (15 >= clicks) {
    clicks++;
    $(".photo-slide-count").html(clicks);
  }
});

$(".previous").click(function() {
  if (2 <= clicks) {
    clicks--;
    $(".photo-slide-count").html(clicks);
  }
});
