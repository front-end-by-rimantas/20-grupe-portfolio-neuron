import { isValidServices } from './isValidServices.js';
import { findIfValidSelector } from './findIfValidSelector.js';
import { isValidServiceItem } from './isValidServiceItem.js';

function renderServices(params) {
    if (!isValidServices(params)) {
        return false;
    }
    const { selector, data } = params;
    
    const DOM = findIfValidSelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (const item of data) {
        if (!isValidServiceItem(item)) {
            continue;
        }
        HTML += `<div class="box">
                    <i class="flaticon-${item.icon}"></i>
                    <h5>${item.title}</h5>
                    <p>${item.text}</p>
                </div>`;
    }

    if (HTML === '') {
        return false;
    }

    DOM.innerHTML = HTML;
    return true;
}

export { renderServices }