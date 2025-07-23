AOS.init();

// $(document).ready(function () {
//     resizeFullHeightSection();

//     // Handle window resize events to update the section height
//     $(window).resize(function () {
//         resizeFullHeightSection();
//     });
// });

// function resizeFullHeightSection() {
//     var windowHeight = $('.scroll section').height();
//     $(".scroll-next").css("margin-top", `calc( 100vh + ${windowHeight / 2 + 'px'} )`);
// }
// $(document).ready(function () {
//     var rocketContainer = $("#rocket-container");
//     var rocket = $("#rocket").height();

//     $(window).scroll(function () {
//         var scrollPos = $(window).scrollTop();
//         var windowHeight = $(window).height();
//         var websiteHeight = $("body").height();

//         var percentage = (scrollPos / (websiteHeight - windowHeight)) * 100;

//         rocketContainer.css("bottom", `calc(${percentage}%)`);
//         rocketContainer.css("transform", `translate(0, ${percentage}%)`);

//         if ($(window).width() < 992) {
//             rocketContainer.css("transform", `translate(0, ${percentage}%)`);
//         }
//     });

// });

$(document).ready(function () {
    var rocketClicked = false;

    $('#rocket-container').click(function () {
        
        if (rocketClicked) {
            return; // Ignore clicks while the animation is running
        }
        rocketClicked = true; // Set the flag to true to prevent additional clicks

        $('html, body').stop().animate({ scrollTop: 0 }, 'fast', function () {
            var rocket = $('#rocket-container');
            rocket.stop().animate({
                'bottom': `${$(window).height()}px`, // Move the rocket to the top of the screen
            }, {
                duration: 1200,
                step: function (now, fx) {
                    if (fx.prop === 'bottom' && now > $(window).height()) {
                        rocket.show();
                    }
                },
                complete: function () {
                    // Reset the rocket to its default position
                    rocket.css({
                        'bottom': '10px',
                        'transform': 'translate(0)',
                        'display':'none'
                    });

                    // Re-enable the click event
                    rocketClicked = false;
                }
            });
        });
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()/2) {
        $('#rocket-container').css('display', 'block');
    }
});





var mbnew = $('.card-img-overlay').height() + 100;

$('.hero-banner').css("margin-bottom", mbnew, '+px')

// $(document).ready(function () {
//     var previousScroll = 0;

//     $(window).scroll(function () {
//         var currentScroll = $(this).scrollTop();

//         if ($(this).scrollTop() > 200) {
//             $('.nav-holder').addClass('nav-animate');
//             if ($(this).scrollTop() > window.innerHeight && currentScroll < previousScroll) {
//                 // Scrolling down
//                 $('.nav-holder').addClass('nav-fixed');
//             } else {
//                 $('.nav-holder').removeClass('nav-fixed');
//             }
//         } else {
//             // Scrolling up
//             $('.nav-holder').removeClass('nav-animate');
//         }

//         previousScroll = currentScroll;
//     });
// });

$(document).ready(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 100) {
            $('.nav-holder').addClass('nav-animate');
            if ($(this).scrollTop() > 500) {
                $('.nav-holder').addClass('nav-fixed');
            }
        }
        else {
            // Scrolling up
            $('.nav-holder').removeClass('nav-animate nav-fixed');
        }
    });
});

new FinisherHeader({
    "count": 13,
    "size": {
        "min": 2,
        "max": 10,
        "pulse": 0
    },
    "speed": {
        "x": {
            "min": 0,
            "max": 0.8
        },
        "y": {
            "min": 0,
            "max": 0.2
        }
    },
    "colors": {
        "background": "#15182e",
        "particles": [
            "#ff926b",
            "#87ddfe",
            "#acaaff",
            "#1bffc2",
            "#f9a5fe"
        ]
    },
    "blending": "screen",
    "opacity": {
        "center": 1,
        "edge": 1
    },
    "skew": -0.5,
    "shapes": [
        "c"
    ]
});


// side bar script

$(document).ready(function () {
    function startAnimation() {
        // Remove the animation class to reset the animation
        $('.cloud').addClass('animated-element');

        // Add the animation class after a delay of 5 seconds
        setTimeout(function () {
            $('.cloud').removeClass('animated-element');
        }, 5000);
    }

    // Set up a loop to restart the animation every 30 seconds
    setInterval(startAnimation, 30000);

    setTimeout($('.cloud').addClass('animated-element'), 5000)
    setTimeout($('.cloud').removeClass('animated-element'), 10000)
});


// new animi

// $(document).ready(function () {
//     // Show the popup when the document is ready
//     $('.popup').addClass('pop-ani');

//     // Set a timeout to hide the popup after a certain time (e.g., 5 seconds)
//     setTimeout(function () {
//         $('.popup').removeClass('pop-ani');
//     }, 5000);

//     // Set an interval to run the animation every 20 seconds
//     setInterval(function () {
//         // Add the animation class to the element you want to animate
//         // For example, if you have an element with the class "animated-element":
//         $('.popup').addClass('pop-ani');

//         // Remove the animation class after a certain time (e.g., 2 seconds)
//         setTimeout(function () {
//             $('.popup').removeClass('pop-ani');
//         }, 5000);
//     }, 20000);
// });

$(document).ready(function () {

    setTimeout(function () {
        $('.popup').removeClass('pop-ani');
    }, 2000);


    setInterval(function () {
        $('.popup').addClass('pop-ani');
    }, 5000);

    setInterval(function () {
        $('.popup').removeClass('pop-ani');
    }, 10000);

});


$('.course .tab-pane .card').attr({
    'data-aos': 'fade-up',
    'data-aos-duration': '600'
});


$(".atit-card-1").hover(function () {
    // Mouseenter event
    $(".atit-card-1").removeClass('active');
    $(this).addClass('active');
});


let getCourseList = sessionStorage.getItem('cousrelist');
if (getCourseList == 1) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(2) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Testing').addClass('active')
} else if (getCourseList == 2) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(3) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Development').addClass('active')
} else if (getCourseList == 3) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(4) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-Devops').addClass('active')
} else if (getCourseList == 4) {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(5) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content #pills-science').addClass('active')
} else {
    $('.course #pills-tab  button.nav-link').removeClass('active')
    $('.course #pills-tab > div:nth-child(1) button.nav-link').addClass('active')
    $('.course .tab-content .tab-pane').removeClass('active')
    $('.course .tab-content .tab-pane:nth-child(1)').addClass('active')
}

document.addEventListener('DOMContentLoaded', function () {
    
});