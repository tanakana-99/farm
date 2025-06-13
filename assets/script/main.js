// ハンバーガーメニュー
var hamburger = $('.burger-menu');

$('.burger-menu__btn').on('click', function () {
    hamburger.toggleClass('burger-menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('burger-menu-active');
});



$(document).ready(function () {
    $('.qa__answer').hide();

    $('.qa__item').on('click', function () {
        var content = $(this).find('.qa__answer');
        var icon = $(this).find('.qa__icon');

        $(this).toggleClass('open');
        content.slideToggle();

        // アイコンの切り替え
        if ($(this).hasClass('open')) {
            icon.removeClass('bi-plus-lg').addClass('bi-dash-lg');
        } else {
            icon.removeClass('bi-dash-lg').addClass('bi-plus-lg');
        }
    });
});

// カルーセル
if (!$('.gallery__box').hasClass('slick-initialized')) {
    $('.gallery__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
        autoplay: false
    });
}

// // ホバー切り替え
// $('.intro__name-01').hover(
//     function () {
//         // マウスが乗ったとき
//         $(this).text('ロボット技術');
//     },
//     function () {
//         // マウスが離れたとき
//         $(this).text('エネルギーセイバー農業ドローン');
//     }
// );