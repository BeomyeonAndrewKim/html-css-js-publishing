$(document).ready(function() {
  var list = $('.product-list-top-1');
  console.log(list);

  list.on("mouseover", function(event) {
    // console.log(this);
    console.log($(this).find(".product-clicked"));
    $(this).children("product-clicked").css("display","block");
  });
  list.on("mouseout", function(event) {
    // console.log(this);
    console.log($(this).find(".product-clicked"));
    $(this).children("product-clicked").css("display","none");
  });


  //   list.off().click(function() {
  //     $(this).addClass('product-clicked');
  //     $(this).parents('.product-list').removeClass('product-clicked');
  //   });
});