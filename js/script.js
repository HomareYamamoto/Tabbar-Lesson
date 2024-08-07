$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に処理してください
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});