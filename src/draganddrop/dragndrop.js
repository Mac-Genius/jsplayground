export class DragNDrop {
    constructor(element) {
        this.element = element;
        this.node = undefined;
        for (let child of $(this.element)) {
            if ($(this.element).hasClass('horizontal')) {
                $(child).on('drop', this._handleHorizontalDrop.bind(this));
            } else {
                $(child).on('drop', this._handleVerticalDrop.bind(this));
            }
            $(child).on('dragstart', this._startDrag.bind(this));
            $(child).on('dragover', this._dragOver.bind(this));
            $(child).on('dragleave', this._dragLeave.bind(this));
        }
    }

    _handleVerticalDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if ($(event.target)[0] !== $(this.element)[0]
                && $(event.target)[0] !== $(this.node)[0]
                && $(event.target).parent($(this.element).attr('id'))) {
            let top = $(event.target).offset().top;
            let bottom = $(event.target).offset().top + $(event.target).outerHeight(false);
            const topMargin = parseInt($(event.target).css('marginTop').replace('px', ''));
            top += topMargin;
            bottom += topMargin;
            $(this.node).detach();
            if (event.clientY - top <= bottom - event.clientY) {
                $(event.target).before(this.node);
            } else {
                $(event.target).after(this.node);
            }
        }
        this.node = undefined;
    }

    _handleHorizontalDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if ($(event.target)[0] !== $(this.element)[0]
                && $(event.target)[0] !== $(this.node)[0]
                && $(event.target).parent($(this.element).attr('id'))) {
            let left = $(event.target).offset().left;
            let right = $(event.target).offset().left + $(event.target).outerWidth(false);
            const leftMargin = parseInt($(event.target).css('marginLeft').replace('px', ''));
            left += leftMargin;
            right += leftMargin;
            $(this.node).detach();
            if (event.clientX - left <= right - event.clientX) {
                $(event.target).before(this.node);
            } else {
                $(event.target).after(this.node);
            }
        }
        this.node = undefined;
    }

    _startDrag(event) {
        this.node = $(event.target);
    }

    _dragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    _dragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}