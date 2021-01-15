class Creativity {
    constructor (params) {
     if (!this.isValidInput(params)) {
        return false;
     }

     this.selector = params.selector;
     this.data = params.data;

    this.DOM = null;

     this.init();
    }

    isValidInput(params) {
        if (typeof params !== 'object' ||
            Object.keys(params).length === 0) {
            return false;
        }
        if (typeof params.selector !== 'string' ||
            params.selector === '') {
            return false;
            }
        if (!Array.isArray(params.data) ||
            params.data.length === 0) {
            return false;
            }

          return true;
        }

        init() {
            if (!this.isValidSelector()) {
                return false;
            }
        }

        isValidSelector() {
            const DOM = document.querySelector(this.selector);
            if (!DOM) {
                return false;
        }
            this.DOM = DOM;
            return true;
        }

        render () {
            let HTML = '';

            for (const item of this.data) {
                HTML += this.generateCreativityItem(item);
            }

            if (HTML === '') {
                return false;
            }
            this.DOM.innerHTML = HTML;
            return true;
        }

        generateCreativityItem(item) {
            return '';
        }
    }


export { Creativity }