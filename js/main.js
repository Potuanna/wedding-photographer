$(document).ready(() => {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false
    });
});
