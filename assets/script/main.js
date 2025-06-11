// ハンバーガーメニュー
var hamburger = $('.burger-menu');

$('.burger-menu__btn').on('click', function () {
    hamburger.toggleClass('burger-menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('burger-menu-active');
});

// アコーディオンメニュー
// $(document).ready(function () {
//     $('.qa__answer').hide();

//     $('.qa__item').on('click', function () {
//         var content = $(this).find('.qa__answer');
//         $(this).toggleClass('open');
//         content.slideToggle();
//     });
// });

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

// // カルーセル
// $(document).ready(function () {
//     $('.gallery__box').slick({
//         slidesToShow: 1, // 一度に表示するスライド数
//         slidesToScroll: 1, // 一度にスライドする数
//         infinite: false, // ループ再生する
//         dots: true, // ドットナビゲーションを表示
//         arrows: false, // 前後の矢印を表示（不要なら false）
//         autoplay: false // 自動再生（必要に応じて true に）
//     });
// });

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



$('.intro__name-01').hover(
    function () {
        // マウスが乗ったとき
        $(this).text('ロボット技術');
    },
    function () {
        // マウスが離れたとき
        $(this).text('エネルギーセイバー農業ドローン');
    }
);