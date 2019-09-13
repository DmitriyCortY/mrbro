if ($('.b-preloader').length > 0) {
    $(".b-preloader__block").eq(0).fadeIn(580, function() {
        $(".b-preloader__block").eq(0).fadeOut(580, function() {
            $(".b-preloader__block").eq(1).fadeIn(580, function() {
                $(".b-preloader__block").eq(1).fadeOut(580, function() {
                    $(".b-preloader__block").eq(2).fadeIn(580)
                })
            })
        })
    })
}
$(document).ready(e => {
    setTimeout(function() {
        if ($('.b-preloader').length > 0) {
            $(".b-preloader").fadeOut(400, function() {
                $(".b-preloader").remove()
            });
        }
    }, 3580)
})