$(document).ready(function() {
    var view_height = $(window).height();

    $('.height-full').css({
        'height': view_height
    });
    $('.height-half').css('height', view_height / 2)

    $(window).resize(function() {
        view_height = $(window).height();
        $('.height-full').css('height', view_height)
        $('.height-half').css('height', view_height / 2)
    })

    $('.button').hover(function(){
        $(this).css('background-color', '#FF6D00');
    }, function(){
        $(this).css('background-color', '#FF9100');
    });

    $('.circle-button').hover(function(){
        $(this).css('background-color', '#0091EA');
    }, function(){
        $(this).css('background-color', '#00B0FF');
    });
})