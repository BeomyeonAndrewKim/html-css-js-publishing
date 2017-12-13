$(document).ready(function() {
  var list = $('.product-list-top-1');
  console.log(list);

  list.on("click", function(event) {
    // console.log(this);
    console.log($(this).find(".product-clicked"));
    $(this).find(".product-clicked").css("display","block");
  });


  //   list.off().click(function() {
  //     $(this).addClass('product-clicked');
  //     $(this).parents('.product-list').removeClass('product-clicked');
  //   });
});