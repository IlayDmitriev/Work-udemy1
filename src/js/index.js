$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../img/chevron-right-solid.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="../img/chevron-left-solid.png"> </button>'
        /* responsive: [
            {
            breakpoint: 768,
                settings: {
                 dots: true,
                 arrows: fales
               }
            }
        ]
 */
    });
});
  