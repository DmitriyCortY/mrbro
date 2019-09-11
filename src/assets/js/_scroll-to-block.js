class ScrollToBlock {
    constructor() {
        this.offset = 0
        this.speed = 1000
        this.place = $('html, body')

        this.callHandler()
    }

    callHandler() {

        $('a[href*=\\#]:not([href=\\#])').bind("click", (e) => {
            e.preventDefault();
            let anchor = $(e.target)
            this.scroll(anchor)
        });
    }

    scroll(anchor) {
        this.place.stop().animate({
            scrollTop: this.calcPosition(anchor)
        }, this.speed)
    }

    calcPosition(anchor) {
        let anchorOffsetTop = $(anchor.attr('href')).offset().top
        return (anchorOffsetTop - this.offset)
    }
}

new ScrollToBlock()