$(function () {
    $(".sp-menu-btn_01").click(function () {
      $(this).toggleClass("active");
  
      if ($(this).hasClass("active")) {
        $(".header__navi_01").addClass("active");
      } else {
        $(".header__navi_01").removeClass("active");
      }
    });
  });
  
  //メニュー内を閉じておく
  $(function () {
    $(".header__navi_01 a[href]").click(function () {
      $(".header__navi_01").removeClass("active");
      $(".sp-menu-btn_01").removeClass("active");
    });
  });