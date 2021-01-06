class Menu {
    constructor(params) {
        this.selector = params.selector;
        this.structure = params.structure;

        this.DOM = null;
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.error('ERROR: selector has to be a string type.')
            return false;
        }
        
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: could not find DOM object based on a given selector.')
            return false;
        }

        this.DOM = DOM;
        return true;
    }

    isHomePage(title) {
        return title === 'Home';
    }

    render() {
        let HTML = '';

        for (const item of this.structure) {
            const active = this.isHomePage(item.title) ? 'active' : '';
            HTML += `<a href="${item.href}" class="${active}">${item.title}</a>`;
        }
        
        this.DOM.innerHTML = HTML;
    }
}

export { Menu }