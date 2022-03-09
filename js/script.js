const left = "<i class='fa-solid fa-circle-chevron-left' style='color: #FFBE9D;'></i>"
const right = "<i class='fa-solid fa-circle-chevron-right' style='color: #FFBE9D;'></i>"

$(document).ready(function() {

    // counter
    $('.counter').counterUp({
        delay: 100,
        time: 1000
    });

    // Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            left,
            right
        ]
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })


    // rating
    $(".my-rating").starRating({
        initialRating: 5,
        starSize: 25,
        useGradient: false,
        hoverColor: '#ED502E',
        activeColor: '#ED502E',
        ratedColor: '#ED502E',
        readOnly: true



    });


});