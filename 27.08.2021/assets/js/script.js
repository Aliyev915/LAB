$(document).ready(function(){
    $('.dropdown').on('click',function(e){
        e.preventDefault();
        if($('.drop-menu').css('display')=='none'){
            $('.fa-caret-right').css({
                'transform':'rotate(90deg)'
            });
        }else{
            $('.fa-caret-right').css({
                'transform':'rotate(0deg)'
            });
        }
        $('.drop-menu').slideToggle();
    })

    $('.burger').click(function(){
        $('.lists').slideToggle();
    })
});