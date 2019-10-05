$(document).ready(function(){
    $('.up').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.up').fadeIn();
        }else{
            $('.up').fadeOut();
        }
    });

    $('.up').click(function(){
        $('body, html').animate({
            scrollTop: 0
        });       
    });
});