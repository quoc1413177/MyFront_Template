/**----------------------WOW INIT-----------------*/

// Helper function for add element box list in WOW
WOW.prototype.addBox = function (element) {
    this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function () {
    $(this).css({
        'visibility': 'hidden',
        'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
}).scrollSpy();

/**----------BACK_TO_TOP BUTTON-------------------*/
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        //document.getElementById("myBtn").style.display = "block";
        $("#myBtn").show();
    } else {
        $("#myBtn").hide();
    }
};
// document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// When the user clicks on the button, scroll to the top of the document
$(".sticky__bar5").click(function(){
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

/**----------------loadMore SET-UP-----------------*/
$(document).ready(function () {
    $(".moreBox").slice(0, 2).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
/**-------------------RESPONSIVE NAVBAR------------------ */
/**Using .stop() to halt all animation of the selector
 * In case there are many selector with the same name, use .first()
 */
  $('.dropdown').on('show.bs.dropdown', function(){
    $('.dropdown-menu').stop(true, true).fadeIn(1000);
  });
  
  $('.dropdown').on('hide.bs.dropdown', function(){
    $('.dropdown-menu').stop(true, true).fadeOut(500);
  });
  /**--------------------NAV RESPONSIVE ON RESIZE-------------
   * add .trigger('resize') for the function to call itself
  */
  $(window).on('resize',function() {
    if($(window).width() > 485)
    {
        $(".nav_responsive").hide(200);
        $(".sticky_media").show(300);

    }
    else{
        $(".nav_responsive").show(300);
        $(".sticky_media").hide(200);
    }
    }).trigger('resize');
});

/**-------------------OWL CAROUSEL INIT---------------*/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });
/** OWL SETUP */ 
$('.owl-carousel').owlCarousel({
    rtl:false,                  //set right to left
    loop:true,                  //set loop
    margin:10,                  //margin between item
    default:6,                  //set number of item to display
    nav:true,                   //enable navig arrow
    responsiveClass:true,       //set responsive
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:true
        }
    }
})