class ScrollBlockAnimBg {
    constructor() {
        this.bgItems = $('.b-fixed-bg__item-inner')
        this.lines = $('.b-fixed-bg__line')

        this.duration = 350
        this.flag = true

        this.currentSrc = ''
    }

    init(src) {
        this.bgItems.css('backgroundImage', 'url(' + src + ')')
    }
    next(src) {
        if (this.flag === true && this.currentSrc != src) {
            this.currentSrc = src
            this.flag = false
            for (let i = 0; i < this.bgItems.length; i++) {
                this.bgItems.eq(i).delay(i * 75)
                    .animate({ deg: 90 }, {
                        duration: this.duration,
                        step: function(deg) {
                            $(this).css({ transform: 'rotateY(' + deg + 'deg)' });
                        }
                    })
                    .animate({ url: src }, {
                        duration: 0,
                        step: function() {
                            $(this).css({ backgroundImage: 'url(' + src + ')' });
                        }
                    })
                    .animate({ deg: 0 }, {
                        duration: this.duration,
                        step: function(deg) {
                            $(this).css({ transform: 'rotateY(' + deg + 'deg)' });
                        }
                    })
            }
            this.flag = true
        }
    }

}