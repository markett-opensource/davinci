////////////////////////////////////////////////

// Autoscroll

///////////////////////////////////////////////

var velocity = 600;
jQuery(document).ready(function ($) {
    $('a[href^="#"]').bind("click.smoothscroll", function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $("html, body")
            .stop()
            .animate(
            {
                scrollTop: $target.offset().top - 5
            },
            velocity,
            function () {
                window.location.hash = target;
            }
        );
    });
});

var scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 1000);
};

////////////////////////////////////////////////

// Modal

///////////////////////////////////////////////

function modal() {
    document.querySelector(".close").addEventListener("click", function () {
        $(".modal").fadeOut();
    });
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            $(".modal").fadeOut();
        }
    });
}