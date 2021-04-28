$(function () {

    var $nav = $('.nav-area')
    var $btn = $('.header-burger')
    var $mask = $('.header-overlay')
    var open = 'open' // class
    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    })
    // overlay close
    $mask.on('click', function () {
        $nav.removeClass(open);
    })

    // smooth scroll
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate(
            {
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed, "swing");
        return false;
    });

    $(window).on('scroll', function () {
        if ($('.header').height() < $(this).scrollTop()) {
            $('.header').addClass('change-color');
        } else {
            $('.header').removeClass('change-color');
        }
    });

    // wow
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
    document.getElementById('moar').onclick = function () {
        var section = document.createElement('section');
        section.className = 'section--purple wow fadeInDown';
        this.parentNode.insertBefore(section, this);
    };

})
