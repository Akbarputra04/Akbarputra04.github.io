$(document).ready(function () {
    $('.judul h1').addClass('slideright');
    $('.judul p').addClass('slidedown');
    $('.sosmed a i').addClass('fadein');
});

$('.scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elementujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 50
    }, 1200);

    e.preventDefault();
});

$(window).on('scroll', function () {
    var windowscroll = $(window).scrollTop();

    $('.home').css({
        'background-position-y': -290 + windowscroll * 1 / 4 + '%'
    });
    $('.contact').css({
        'background-position-y': windowscroll / 1 / 20 + '%'
    });

    if (windowscroll > $('.about').offset().top - 300) {
        $('.about h1').addClass('slidedown');
        $('.about .kiri').addClass('slideright');
        $('.about .kanan').addClass('slideleft');

        if (windowscroll > $('.project').offset().top - 100) {
            $('.project h1').addClass('slidedown');

            $('.project .card').each(function (i) {
                setTimeout(function () {
                    $('.project .card').eq(i).addClass('slidedown');
                }, 300 * (i + 1));
            });
        }
    }
})