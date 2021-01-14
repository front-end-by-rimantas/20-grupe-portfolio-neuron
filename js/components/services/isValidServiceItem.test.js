import { isValidServiceItem } from './isValidServiceItem.js';

describe('Tikriname item duomenu formata', () => {
    test('netinkamas item formatas', () => {
        expect(isValidServiceItem()).toBeFalsy();
        expect(isValidServiceItem([])).toBeFalsy();
        expect(isValidServiceItem(123)).toBeFalsy();
        expect(isValidServiceItem('')).toBeFalsy();
        expect(isValidServiceItem('test')).toBeFalsy();
        expect(isValidServiceItem({})).toBeFalsy();
        expect(isValidServiceItem({icon: 'idea', title: 'title'})).toBeFalsy();
    })

    test('netinkamas icon.item icon.title arba icon.text formatas', () => {
        expect(isValidServiceItem({icon: 123, title: 'title', text: 'text'})).toBeFalsy();
        expect(isValidServiceItem({icon: 'idea', title: 123, text: 'text'})).toBeFalsy();
        expect(isValidServiceItem({icon: 'idea', title: 'title', text: 123})).toBeFalsy();
        expect(isValidServiceItem({icon: '', title: 'title', text: 'text'})).toBeFalsy();
        expect(isValidServiceItem({icon: 'idea', title: '', text: 'text'})).toBeFalsy();
        expect(isValidServiceItem({icon: 'idea', title: 'title', text: ''})).toBeFalsy();
    })

    test('tinkamas item formatas', () => {
        expect(isValidServiceItem({ icon: 'idea', title: 'title', text: 'text'})).toBeTruthy();
    })
})
