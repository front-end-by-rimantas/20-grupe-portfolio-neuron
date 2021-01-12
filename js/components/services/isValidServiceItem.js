function isValidServiceItem(item) {
    if (typeof item !== 'object' ||
        Array.isArray(item) ||
        Object.keys(item).length !== 3) {
        return false;
    }

    if (typeof item.icon !== 'string' ||
        typeof item.title !== 'string' ||
        typeof item.text !== 'string' ||
        item.icon === '' ||
        item.title === '' ||
        item.text === '') {
        return false;
    }
    return true;
}

export { isValidServiceItem }