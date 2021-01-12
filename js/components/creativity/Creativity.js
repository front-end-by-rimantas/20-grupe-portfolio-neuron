class Creativity {
    constructor (params) {
     if (!this.isValidInput(params)) {
        return false;
     }

     this.selector = params.selector;
     this.data = params.data;
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
    }


export { Creativity }