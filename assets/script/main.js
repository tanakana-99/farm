// ハンバーガーメニュー
var hamburger = $('.burger-menu');

$('.burger-menu__btn').on('click', function () {
    hamburger.toggleClass('burger-menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('burger-menu-active');
});