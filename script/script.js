$(function(){
    let i = 0;
    $('#carouselExampleControls').hide();
    $('#arrow').on('click', function(){
        $('.box1').fadeTo(1000, 0);
        $('.box2').fadeTo(1000,1);
        //$(this).addClass('spinning');
        $(this).addClass('spinning').delay(2800).queue(function( next ){
            $(this).removeClass('spinning'); 
            next();
        });
        i++;
        if(i == 2){
            $('.box2').fadeTo(1000,0);
            $('.box3').fadeTo(1000,1);
        }
        if(i == 3){
            $('.box1').hide();
            $('.box2').hide();
            $('.box3').hide();
            $('#carouselExampleControls').show();
        }
        if(i == 4){
            window.location.href = "calendar.html"
        }
        console.log(i);
    })
})