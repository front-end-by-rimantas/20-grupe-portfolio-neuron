function isValidAchievementItem(item) {
    if (typeof item !== 'object' ||
        item === null ||
        Array.isArray(item) ||
        Object.keys(item).length !== 2) {
        return false;
    }

    if (typeof item.number !== 'number' ||
        isNaN(item.number) ||
        !isFinite(item.number) ||
        item.number < 1 ||
        item.number % 1 !== 0) {
        return false;
    }

    if (typeof item.label !== 'string' ||
        item.label === '') {
        return false;
    }
    return true;
}

export { isValidAchievementItem };