import { isValidServices } from './isValidServices.js';

describe('Tikriname params duomenu formata', () => {
    test('netinkamas params formatas', () => {
        expect(isValidServices()).toBeFalsy();
        expect(isValidServices([])).toBeFalsy();
        expect(isValidServices(123)).toBeFalsy();
        expect(isValidServices('')).toBeFalsy();
        expect(isValidServices('test')).toBeFalsy();
        expect(isValidServices(true)).toBeFalsy();
        expect(isValidServices(null)).toBeFalsy();
        expect(isValidServices(NaN)).toBeFalsy();
    })

    test('params negali būti tuščias objektas', () => {
        expect(isValidServices({})).toBeFalsy();
    })

    test('netinkamas params.selector formatas', () => {
        expect(isValidServices({ selector: '', data: [{}] })).toBeFalsy();
        expect(isValidServices({ selector: 123, data: [{}] })).toBeFalsy();
    })

    test('netinkamas params.data formatas', () => {
        expect(isValidServices({ selector: '.box', data: '' })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: 'test' })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: 123 })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: {} })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: null })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: true })).toBeFalsy();
        expect(isValidServices({ selector: '.box', data: [] })).toBeFalsy();
    })

    test('tinkamas params formatas', () => {
        expect(isValidServices({ selector: '.box', data: [{ icon: 'icon', title: 'title', text: 'text'}] })).toBeTruthy();
    })
})
