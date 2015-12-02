$(function(){
    $('.bell').on('click', function(){
        $('.alert').addClass('open');
    });
    $('.close').on('click', function(){
        $('.alert').removeClass('open');
    });
    $('.window.right').on('click', function(){
        console.log($(this));
        $(this).animate({opacity:0}, 1000);
    });
});

