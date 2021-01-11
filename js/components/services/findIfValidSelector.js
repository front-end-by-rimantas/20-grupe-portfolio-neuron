function findIfValidSelector(selector) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    return DOM;
}

export { findIfValidSelector }