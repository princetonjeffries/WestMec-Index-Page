$(function(){
    let i = 0;
    $('#arrow').on('click', function(){
        $('.box1').fadeTo(1000, 0);
        $('.box2').fadeTo(1000,1);
        i++;
        if(i == 2){
            $('.box2').fadeTo(1000, 0);
            $('.box3').fadeTo(1000,1);
        }
        if(i == 3){
            window.location.href = "calendar.html"
        }
        console.log(i);
    })
})