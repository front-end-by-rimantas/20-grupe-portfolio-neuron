import { findIfValidSelector } from './findIfValidSelector.js';


const serviceHTML = `<div class="box">
                            <i class="flaticon-brain"></i>
                            <h5>Title</h5>
                            <p>text</p>
                        </div>`;
describe('Tikriname duomenu formata', () => {
    test('netinkamas selector formatas', () => {
        expect(findIfValidSelector()).toBeFalsy();
        expect(findIfValidSelector(551)).toBeFalsy();
        expect(findIfValidSelector(true)).toBeFalsy();
        expect(findIfValidSelector(false)).toBeFalsy();
        expect(findIfValidSelector([])).toBeFalsy();
        expect(findIfValidSelector({})).toBeFalsy();
        expect(findIfValidSelector('')).toBeFalsy();
        expect(findIfValidSelector(null)).toBeFalsy();
        expect(findIfValidSelector(NaN)).toBeFalsy();
    })

    test('nerasta vieta pagal selector', () => {
        document.body.innerHTML = serviceHTML
        expect(findIfValidSelector('.boxes')).toBeFalsy();
    })
    test('nerasta vieta pagal selector', () => {
        document.body.innerHTML = serviceHTML
        expect(findIfValidSelector('.box')).toBeTruthy();
    })
})
