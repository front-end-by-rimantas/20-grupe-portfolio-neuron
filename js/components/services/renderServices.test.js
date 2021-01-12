import { renderServices } from './renderServices.js';

const serviceHTML = `<div class="box">
                            <i class="flaticon-brain"></i>
                            <h5>Title</h5>
                            <p>text</p>
                        </div>`;

describe('Tikriname item duomenu formata', () => {
    test('suformuotas HTML tekstas', () => {
        document.body.innerHTML = serviceHTML;
        expect(renderServices({ selector: '.box', data: [{icon: 'idea', title: 'title', text: 'text'}] })).toBeTruthy();
    })
})
