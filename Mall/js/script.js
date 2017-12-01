$(document).ready(function() {
  var list = $('.product-list-top-2');


  list.on("click", function(event) {
    $(this).toggleClass('product-clicked');
  });


  //   list.off().click(function() {
  //     $(this).addClass('product-clicked');
  //     $(this).parents('.product-list').removeClass('product-clicked');
  //   });
});