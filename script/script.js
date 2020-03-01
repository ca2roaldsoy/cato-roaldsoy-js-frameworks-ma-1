$(document).ready(function () {
    
    $(".img-slide").css({
        
        width: "500px",
        margin: "0 auto",
        top: "320px",
    });
    
    $(".img-slide").slick({
        
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
    });
});