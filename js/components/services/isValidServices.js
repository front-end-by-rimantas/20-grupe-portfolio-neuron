function isValidServices(params) {
    if (typeof params !== 'object' ||
        Array.isArray(params) ||
        params === null ||
        Object.keys(params).length === 0) {
        return false
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

export { isValidServices }