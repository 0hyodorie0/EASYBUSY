$(function() {

    $('.gw-menu-list').on('click', function() {
        $('.gw-menu-list').removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
    $('.gw-menu-item').on('click', function() {
        $('.gw-menu-item').removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
});