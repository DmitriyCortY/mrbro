class TitleBgTextAnim {
    constructor(c) {
        this.title = c.item
        this.text = this.title.data('bgTxt')
        this.length = this.text.length
        this.step = 150
        this.count = 0
        this.init()
        this.flag = true
    }

    init() {
        $(window).on('scroll', e => {
            this.start()
        })
        $(window).on('load', e => {
            this.start()
        })

        this.start()
    }
    start() {
        if (this.flagPosition() && this.flag) {
            this.typedText()
            this.flag = false
        }
    }
    typedText() {
        this.title.attr('data-bg-txt', '')
        let interval = setInterval(e => {
            if (this.count < this.length) {
                this.title.attr('data-bg-txt', (this.title.attr('data-bg-txt') + this.text[this.count]))
                this.count++;
            } else {
                clearInterval(interval)
            }
        }, this.step)
    }
    flagPosition() {
        let _howScrolled = $(window).scrollTop()
        let _windowHeight = $(window).height()
        let _offsetToStartPage = this.title.offset().top
        let _flag = false
        if ((_offsetToStartPage - _windowHeight - _howScrolled) < 0 && (_offsetToStartPage - 100 - _howScrolled) > 0) {
            _flag = true
        }
        return _flag
    }
}

if ($('[data-bg-txt]').length > 0) {
    for (let i = 0; i < $('[data-bg-txt]').length; i++) {
        new TitleBgTextAnim({
            item: $('[data-bg-txt]').eq(0)
        })
    }
}