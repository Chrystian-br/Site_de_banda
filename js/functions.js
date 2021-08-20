$(function(){

    // Abrindo o submenu
    $('.more-bttn').hover(function(){
        $('.more').slideToggle(250);
    })
    

    // Abrindo o menu mobile
    $(".menu-bttn").click(function(){
        $('.mobile-menu ul').slideToggle(500);
    })


    // Janela modal
    $('body').click(function(){
        $('.tickets').slideUp(200, function(){
            $('.modal').css('display','none');
        })
    })

    $('.text-tour-local-single button').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.modal').css('display','block');
        $('.tickets').slideDown(200)
    })

    $('.tickets').click(function(e){
        e.stopPropagation();
    })

    $('.rodape-modal button').click(function(){
        $('.tickets').slideUp(200, function(){
            $('.modal').css('display','none');
        })
    })
    
})