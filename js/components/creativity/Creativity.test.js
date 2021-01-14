import { Creativity } from './Creativity.js';


describe('validation of parameters', () => {
    test('return false if parameters are not an object', () => {
        const creativity = new Creativity();
        expect(Object.keys(creativity).length).toBe(0);
    })

    test('return false if parameters are empty object', () => {
        const creativity = new Creativity({});
        expect(Object.keys(creativity).length).toBe(0);
    })

    test('return false if selector is not text', () => {
        const creativity = new Creativity();
        expect(creativity.isValidInput({selector: 955})).toBeFalsy();
        expect(creativity.isValidInput({selector: true})).toBeFalsy();
        expect(creativity.isValidInput({selector: false})).toBeFalsy();
        expect(creativity.isValidInput({selector: []})).toBeFalsy();
        expect(creativity.isValidInput({selector: {}})).toBeFalsy();
    })
    test('return false if selector is empty text', () => {
        const creativity = new Creativity();
        expect(creativity.isValidInput({selector: ''})).toBeFalsy();
    })
    test('return false if data is not array', () => {
        const creativity = new Creativity();
        expect(creativity.isValidInput({
            selector: 'body'
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: 15
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: ''
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: ''
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: true
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: false
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: {}
         })).toBeFalsy();
         expect(creativity.isValidInput({
            selector: 'body',
            data: []
         })).toBeFalsy();
    })

    test('return false if data is not array', () => {
        const creativity = new Creativity();
        expect(creativity.isValidInput({
            selector: 'body',
            data: []
         })).toBeFalsy();
    })

    test('return not empty object when all parametres and quantity of them in constructor are currect', () => {
       const params = {
        selector: 'body',
        data: [{}]
       } 
        const creativity = new Creativity(params);
        expect(creativity.isValidInput(params)).toBeTruthy();
        expect(Object.keys(creativity).length).toBe(3);
    })

    test('return false if given selector does not exist <h1>', () => {
        document.body.innerHTML = '';
            const params = {
            selector: 'h1',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.isValidSelector()).toBeFalsy();
    })

    test('return false if given selector does not exist <div id="creativity">', () => {
        document.body.innerHTML = '<div id="creativity2">';
            const params = {
            selector: '#creativity',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.isValidSelector()).toBeFalsy();
    })

    test('return true if given selector exist <div id="creativity">', () => {
        document.body.innerHTML = '<div id="creativity">';
            const params = {
            selector: '#creativity',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.isValidSelector()).toBeTruthy();
    })

    test('should find DOM element if selector is correct', () => {
        document.body.innerHTML = '<div id="creativity">';
            const params = {
            selector: '#creativity',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.DOM).not.toBeNull();
    })

    test('should return empty HTML text if data list is wrong', () => {
        document.body.innerHTML = '<div id="creativity">';
            const params = {
            selector: '#creativity',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.DOM).not.toBeNull();
    })

    test('should return empty HTML text if data list is wrong', () => {
        document.body.innerHTML = '<div id="creativity">';
            const params = {
            selector: '#creativity',
            data: [{}]
        }
        const creativity = new Creativity(params);
        expect(creativity.render()).toBeFalsy();
    })

    test('should return empty HTML text if data of creativity section object is wrong', () => {
        const creativity = new Creativity();
        expect(creativity.generateCreativityItem()).toBe('');
        expect(creativity.generateCreativityItem({})).toBe('');
        expect(creativity.generateCreativityItem({})).toBe('');
    })
})
