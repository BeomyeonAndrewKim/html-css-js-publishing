const mainMenuUl = $(".main-menu > ul");

mainMenuUl.on("click", function() {
  $(this).toggleClass("clicked");
});

const menuButton = $(".menu-button");
const navigation = $(".navigation");

menuButton.on("click", function() {
  $(this).toggleClass("clicked");
  navigation.toggleClass("clicked");
});
