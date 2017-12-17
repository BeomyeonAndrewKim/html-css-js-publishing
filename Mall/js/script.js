

$(document).ready(function() {
  var listTop = $('.product-list-top>li');
  var listBottom = $('.product-list-bottom>li');

  listTop.on("mouseover", function(event) {
    $(this).find(".product-clicked").css("display","inline-block");
    $(this).find(".product-clicked-buttons").css("height","360px");
    $(this).find("h3").css("color","#ffffff");
  });
  listTop.on("mouseout", function(event) {
    $(this).find(".product-clicked").css("display","none");
    $(this).find("h3").css("color","#222222");
  });

  listBottom.on("mouseover", function(event) {
    $(this).find(".product-clicked").css("display","inline-block");
    $(this).find(".product-clicked-buttons").css("height","240px")
    $(this).find("h3").css("color","#ffffff");
    
  });
  listBottom.on("mouseout", function(event) {
    $(this).find(".product-clicked").css("display","none");
    $(this).find("h3").css("color","#222222");
  });
});