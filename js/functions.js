$(function(){

    // Abrindo o submenu
    $('.more-bttn').hover(function(){
        $('.more').slideToggle(250);
    })
    

    // Abrindo o menu mobile
    $(".menu-bttn").click(function(){
        $('.mobile-menu ul').slideToggle(500);
    })


    // Abrir a lista de tour do mês
    abrirListaTour();
    function abrirListaTour(){

        $('.tour-mes').eq(0).css('display','block');
        $('.meses-tour li').eq(0).css('background-color','rgb(50,50,50)').css('color','white');

        $('.meses-tour li').click(function(){
            var mesSplit = $(this).text().split(" ");
            
            $('.meses-tour li').css('background-color','white').css('color','rgb(134,134,134)');
            $(this).css('background-color','rgb(50,50,50)').css('color','white');

            if($(`.tour-mes.${mesSplit[0]}`).css('display') == 'none'){
                $(`.tour-mes`).slideUp(1000,function(){});
                $(`.tour-mes.${mesSplit[0]}`).slideDown(1000);
            }
        })
    }
    
    
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
