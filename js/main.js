$("document").ready(function () {
    let banner_swiper = new Swiper(".banner-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "fade",
        speed : 800,
        autoplay: {
            delay: 5000,
        },
    });
    
});