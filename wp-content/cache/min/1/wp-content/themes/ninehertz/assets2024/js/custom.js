jQuery(document).ready(function($) {
    $('input[name="full-name"]').on('keypress', function(e) {
        let char = String.fromCharCode(e.which);
        if (!/^[a-zA-Z.\s]+$/.test(char)) {
            e.preventDefault()
        }
    })
});
new WOW().init();
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky")
        } else {
            $('header').removeClass("sticky")
        }
    });
    let SwiperBottom = new Swiper('.page-partner-slider .swiper-container', {
        spaceBetween: 0,
        centeredSlides: !0,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });
    var swiper = new Swiper('.sf-form .swiper-container', {
        spaceBetween: 20,
        centeredSlides: !1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: !1,
        },
        loop: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        },
        on: {
            init: function() {
                var slides = document.querySelectorAll('.swiper-slide');
                slides[this.activeIndex].classList.add('active')
            },
            slideChange: function() {
                var slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(function(slide) {
                    slide.classList.remove('active')
                });
                slides[this.activeIndex].classList.add('active')
            }
        }
    });
    var swiper = new Swiper('.madc-brands-trust .swiper-container', {
        spaceBetween: 0,
        centeredSlides: !0,
        slidesPerView: 4,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });
    var swiper = new Swiper('.abt-solution-partner-slider .swiper-container', {
        spaceBetween: 30,
        centeredSlides: !0,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1366: {
                slidesPerView: 6,
            }
        }
    });
    var swiper = new Swiper('.success-stories-slider .swiper-container', {
        spaceBetween: 50,
        centeredSlides: !0,
        slidesPerView: 2,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });
    var swiper = new Swiper('.testimonials-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: ".testimonials-slider .swiper-pagination",
            clickable: !0,
        },
        navigation: !1,
        mousewheel: !1,
        keyboard: !0,
        loop: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        }
    });
    var swiper = new Swiper('.latest-news-slider .swiper-container', {
        spaceBetween: 50,
        centeredSlides: !0,
        slidesPerView: 3,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    var swiper = new Swiper('.press-release .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 1000,
        pagination: {
            el: ".press-release .swiper-pagination",
            clickable: !0,
        },
        navigation: !1,
        mousewheel: !1,
        keyboard: !0,
        loop: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        }
    });
    var swiper = new Swiper('.horizontal-scrolling .swiper-container, .owl-mob-show .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 1000,
        pagination: {
            el: ".horizontal-scrolling .swiper-pagination",
            clickable: !0,
        },
        navigation: !1,
        mousewheel: !1,
        keyboard: !0,
        autoplay: {
            delay: 3000,
        },
        loop: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        }
    });
    var slider = new Swiper('.ai-new-tools .gallery-slider', {
        slidesPerView: 1,
        centeredSlides: !1,
        spaceBetween: 0,
        loop: !0,
        loopedSlides: 6,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var thumbs = new Swiper('.ai-new-tools .gallery-thumbs', {
        slidesPerView: '5',
        spaceBetween: 10,
        centeredSlides: !1,
        loop: !0,
        slideToClickedSlide: !0,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });
    new Swiper('.process-steps .swiper-container', {
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 20,
        loop: !1,
        centeredSlides: !1,
        roundLengths: !1,
        mousewheel: !1,
        grabCursor: !0,
        pagination: {
            el: '.process-steps .swiper-pagination',
            clickable: !0,
        },
        navigation: {
            nextEl: '.process-steps .swiper-button-next',
            prevEl: '.process-steps .swiper-button-prev',
        },
    });
    var swiper = new Swiper('.mob-port-latest .swiper-container, .clutch-port-latest .swiper-container', {
        pagination: !1,
        centeredSlides: !0,
        paginationClickable: !0,
        loop: !0,
        spaceBetween: 40,
        slidesPerView: 1.4,
        watchSlidesVisibility: !0,
        slideToClickedSlide: !0,
        navigation: {
            nextEl: '.mob-port-latest .swiper-button-next, .clutch-port-latest .swiper-container',
            prevEl: '.mob-port-latest .swiper-button-prev, .clutch-port-latest .swiper-container',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            787: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 1.4,
            },
            1200: {
                slidesPerView: 1.4,
            }
        }
    });
    var swiper = new Swiper('.inner-success-stories-slider .swiper-container', {
        spaceBetween: 50,
        centeredSlides: !0,
        slidesPerView: 2,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });
    var swiper = new Swiper('.achievements-partner-slider .swiper-container', {
        spaceBetween: 30,
        centeredSlides: !0,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1366: {
                slidesPerView: 6,
            }
        }
    });
    var mySwiper = new Swiper('.e-client-say .swiper-container', {
        loop: !0,
        autoplayDisableOnInteraction: !1,
        slidesPerView: 1,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    new Swiper("#cross-fade-swiper-container", {
        autoplay: {
            delay: 2600,
        },
        speed: 1200,
        effect: "fade",
        fadeEffect: {
            crossFade: !0,
        },
    });
    var galleryThumbs = new Swiper(".abt-gallery .gallery-thumbs", {
        centeredSlides: !1,
        centeredSlidesBounds: !0,
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: !1,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        watchOverflow: !0,
        autoplay: {
            delay: 2600,
        },
        speed: 1200,
        breakpoints: {
            480: {
                direction: "vertical",
                slidesPerView: 3
            }
        }
    });
    var galleryTop = new Swiper(".abt-gallery .gallery-top", {
        direction: "horizontal",
        spaceBetween: 10,
        autoplay: {
            delay: 2600,
        },
        speed: 1200,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        a11y: {
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
        },
        keyboard: {
            enabled: !0,
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    galleryTop.on("slideChangeTransitionStart", function() {
        galleryThumbs.slideTo(galleryTop.activeIndex)
    });
    galleryThumbs.on("transitionStart", function() {
        galleryTop.slideTo(galleryThumbs.activeIndex)
    });
    var mySwiper = new Swiper('.ai-partner-slider .swiper-container', {
        spaceBetween: 0,
        centeredSlides: !0,
        slidesPerView: 6,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });
    var swiper = new Swiper('.a_i-horizontal-scrolling .swiper-container, .owl-mob-show .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 1000,
        pagination: {
            el: ".a_i-horizontal-scrolling .swiper-pagination",
            clickable: !0,
        },
        navigation: !1,
        mousewheel: !1,
        keyboard: !0,
        autoplay: {
            delay: 3000,
        },
        loop: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        }
    });
    $('#show-more-content').hide();
    $('#show-more').click(function() {
        $('#show-more-content').show(300);
        $('#show-less').show();
        $('#show-more').hide()
    });
    $('#show-less').click(function() {
        $('#show-more-content').hide(150);
        $('#show-more').show();
        $(this).hide()
    });
    var fileInput = $('.file-input');
    var droparea = $('.file-drop-area');
    fileInput.on('dragenter focus click', function() {
        droparea.addClass('is-active')
    });
    fileInput.on('dragleave blur drop', function() {
        droparea.removeClass('is-active')
    });
    fileInput.on('change', function() {
        var filesCount = $(this)[0].files.length;
        var textContainer = $(this).parent().prev();
        if (filesCount === 1) {
            var fileName = $(this).val().split('\\').pop();
            textContainer.text(fileName)
        } else {
            textContainer.text(filesCount + ' files selected')
        }
    });
    var mySwiper = new Swiper('.cr-banner-section .swiper-container', {
        direction: 'horizontal',
        loop: !0,
        effect: 'fade',
        speed: 1200,
        autoplay: {
            delay: 2600,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });
    var mySwiper = new Swiper('.case-studies-inside-page .swiper-container', {
        loop: !0,
        autoplayDisableOnInteraction: !1,
        slidesPerView: 1,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper = new Swiper('.client-say-inner-page .swiper-container', {
        loop: !0,
        autoplayDisableOnInteraction: !1,
        slidesPerView: 1,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.mp-aps-better .swiper-container', {
        spaceBetween: 30,
        centeredSlides: !1,
        slidesPerView: "auto",
        watchSlidesVisibility: !0,
        slideToClickedSlide: !0,
        loop: !0,
        autoplay: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        grabCursor: !0,
        navigation: {
            nextEl: '.mp-aps-better .swiper-button-next, .mp-aps-better2 .swiper-button-next',
            prevEl: '.mp-aps-better .swiper-button-prev, .mp-aps-better2 .swiper-button-prev',
        },
        on: {
            slideChangeTransitionEnd: function() {
                document.querySelector('.swiper-container').style.paddingLeft = '0'
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3.5,
            },
            1299: {
                slidesPerView: 4.5,
            }
        }
    });
    var swiper = new Swiper('.we-live .swiper-container', {
        spaceBetween: 5,
        centeredSlides: !0,
        slidesPerView: 3,
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: !0,
        allowTouchMove: !0,
        disableOnInteraction: !0,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    $(document).ready(function() {
        const body = $('.backdrop-main');
        $('.dropdown').click(function(event) {
            event.stopPropagation();
            const dropdownMenu = $(this).find('.dropdown-menu');
            const dropdownToggle = $(this).find('.dropdown-toggle');
            $('.dropdown-menu').not(dropdownMenu).stop(!0, !0).slideUp(300);
            $('.dropdown-toggle').not(dropdownToggle).removeClass('active');
            dropdownMenu.stop(!0, !0).slideToggle(300, function() {
                dropdownToggle.toggleClass('active');
                if ($('.dropdown-menu:visible').length > 0) {
                    body.addClass('dropdown-open')
                } else {
                    body.removeClass('dropdown-open')
                }
            })
        });
        $('.dropdown-menu').click(function(event) {
            event.stopPropagation()
        });
        $('.nav-tabs .nav-item .nav-link').click(function(event) {
            event.stopPropagation()
        });
        $(document).click(function() {
            $('.dropdown-menu').stop(!0, !0).slideUp(300).promise().done(function() {
                body.removeClass('dropdown-open');
                $('.dropdown-toggle').removeClass('active')
            })
        })
    });
    $(".toc li a").click(function() {
        $(".toc li a.active").removeClass("active");
        $(this).addClass("active")
    });
    $('[name="graduate"]').change(function() {
        if ($('[name="graduate"]:checked').length > 0) {
            $('.dollar-usd').hide();
            $('.indian-rupee').show();
            $(".usd").removeClass("active");
            $(".nir").addClass("active")
        } else {
            $('.dollar-usd').show();
            $('.indian-rupee').hide();
            $(".usd").addClass("active");
            $(".nir").removeClass("active")
        }
    });
    $('.mob-tabpane-toggler').on('click', function(e) {
        if ($(window).width() < 768) {
            e.preventDefault();
            var $this = $(this),
                $thisHrefValue = $(this).attr('href');
            $this.parent().parent().siblings().removeClass('active show');
            $this.parent().parent().addClass('active show');
            $this.parent().parent().parent().siblings('.navTab').find('.nav-link').removeClass('active');
            $thisHrefValue = $thisHrefValue + '-tab';
            $($thisHrefValue).addClass('active');
            console.log($thisHrefValue)
        } else {
            console.log('height greater')
        }
    });
    $('.counting').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum))
            },
            complete: function() {
                $this.text(this.countNum)
            }
        })
    })
});
jQuery(".main-menu-toggle").click(function() {
    jQuery(this).parent("li.menu-item").toggleClass("open_active"), jQuery(".sub-menu", this).slideToggle(), jQuery(this).toggleClass("menu-show"), jQuery(this).next("ul.sub-menu").toggleClass("open_in")
}), jQuery(".mobile-menu").click(function() {
    jQuery(".mobile_navigation").toggleClass("mobile-menu-open")
}), jQuery(".mobile-menu li a span").click(function(e) {
    return e.preventDefault(), jQuery(this).find(".sub-menu").first().fadeToggle(), !1
}), $(".mobile-menu-close").click(function() {
    $(".mobile-nav2").toggleClass("show-menu"), $(".panelOverlay").toggleClass("mobile-overly"), $(".navbar-brand,.top-menu,.menu").toggleClass("display-none"), $(".masthead").toggleClass("mouseevent-none"), $("body").toggleClass("overflow-none")
}), $(".menu-btn").click(function() {
    $(".top-menu,.mob-menu").toggleClass("display-none"), $(".masthead").toggleClass("mouseevent-none"), $("body").toggleClass("overflow-none")
});
var e = $("#hamburger-icon"),
    t = $(".mobile-nav");
e.click(function() {
    return t.toggle(), e.toggleClass("active"), !1
}), e.click(function() {
    return t.toggleClass("show-menu"), !1
});
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active')
    }
});
$(function() {
    $('.switch').on('click', function() {
        $('.text-primary').toggleClass('clicked')
    })
});
$(document).ready(function() {
    $(".revamping-businesses-process .nav-tabs .nav-item").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    })
});
jQuery(document).ready(function($) {
    let currentIndex = 0;
    const items = $('.box-text .sub-bx');
    const totalItems = items.length;

    function showSlide(index) {
        items.removeClass('active');
        const currentItem = items.eq(index);
        currentItem.addClass('active');
        const listItems = currentItem.find('li');
        if (listItems.length > 0) {
            activateListItems(listItems, index)
        } else {
            setTimeout(function() {
                currentIndex = (currentIndex + 1) % totalItems;
                showSlide(currentIndex)
            }, 5000)
        }
    }

    function activateListItems(listItems, parentIndex) {
        let liIndex = 0;
        const totalLiItems = listItems.length;
        listItems.removeClass('active');
        const liInterval = setInterval(function() {
            listItems.removeClass('active');
            listItems.eq(liIndex).addClass('active');
            liIndex++;
            if (liIndex >= totalLiItems) {
                clearInterval(liInterval);
                setTimeout(function() {
                    currentIndex = (parentIndex + 1) % totalItems;
                    showSlide(currentIndex)
                }, 1000)
            }
        }, 1000)
    }

    function startSlider() {
        showSlide(currentIndex)
    }
    startSlider()
})