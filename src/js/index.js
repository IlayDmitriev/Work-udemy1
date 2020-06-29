$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        /* adaptiveHeight: true, */
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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    $('.catalog-item__link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i) .toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i) .toggleClass('.catalog-item__list_active');
        })
    })  
    $('[data-modal=consultation]'). on('click', function(){
         $('.overlay, #consultation').fadeIn('slow'); 
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order' ).fadeOut('slow');
    });
    $('.button_mini').on('click', function(){
        $('.overlay, #order').fadeIn('slow');
    });
  

    $('#order form').validate();
    function validateForms(Form){
        $('Form').validate({
            rules:{
            name: "required",
            phone: "required",
            email:{
                required: true,
                email: true
            }
            },
            messages:{
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свое номер телефона",
                email: {
                    required:"Пожалуйста, введите свою почту ",
                    email: "Неправильно введен почтовый адресс" 
                }
            }
        });
    };
    validateForms('.consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    $('input[name=phone]').mask("+7(999)999-99-99");
});
  