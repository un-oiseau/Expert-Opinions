// FAQ Tabs

$(document).ready(function(){
    $(".nav-pills a").click(function(e){
        e.preventDefault();
        $(this).tab("show");
    });
});

// Owl Carousel

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    nav: true,
    dots: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    margin:30,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive : {
        0 : {
            items:1,
        },
        786 : {
            items:2,
        },
        992 : {
            items:3,
        },
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})