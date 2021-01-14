import { Achievements } from './Achievements.js';

const achievementsHTML = `<section class="achievements container">
                            <div id="achievements_block" class="row">
                            </div>
                        </section>`


// params.selector tests
describe('check if selector is valid', () => {
    test('selector is invalid if number is given', () => {
        const achievements = new Achievements({selector: 666}); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if empty string is given', () => {
        const achievements = new Achievements({ selector: '' }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if array is given', () => {
        const achievements = new Achievements({ selector: [] }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if object is given', () => {
        const achievements = new Achievements({ selector: {} }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if boolean is given', () => {
        const achievements = new Achievements({ selector: false }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if undefined is given', () => {
        const achievements = new Achievements({ selector: undefined }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if null is given', () => {
        const achievements = new Achievements({ selector: null }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('selector is invalid if NaN is given', () => {
        const achievements = new Achievements({ selector: NaN }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('false if can not find element by given selector', () => {
        document.body.innerHTML = achievementsHTML;
        const achievements = new Achievements({ selector: '#achievements' }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('true if can find element by given selector', () => {
        document.body.innerHTML = achievementsHTML;
        const achievements = new Achievements({ selector: '#achievements_block' }); 
        expect(achievements.isValidSelector()).toBeTruthy();
    })
})

// params.data tests
describe('check if parameters data is valid', () => {
    test('data is invalid if array is given', () => {
            const achievements = new Achievements({ data: [] }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('data is invalid if empty string is given', () => {
            const achievements = new Achievements({ data: '' }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if string is given', () => {
            const achievements = new Achievements({ data: 'tralialia' }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if number is given', () => {
            const achievements = new Achievements({ data: 666 }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('data is invalid if object is given', () => {
            const achievements = new Achievements({ data: {} }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if NaN is given', () => {
            const achievements = new Achievements({ data: NaN }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if null is given', () => {
            const achievements = new Achievements({ data: null }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if undefined is given', () => {
            const achievements = new Achievements({ data: undefined }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('data is invalid if boolean is given', () => {
            const achievements = new Achievements({ data: true }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('true if array with object inside is given', () => {
            const achievements = new Achievements({ data: [{}] }); 
            expect(achievements.isValidData()).toBeTruthy();
        })
})

// limit tests
describe('check if limit is valid', () => {
    test('limit is invalid if empty string is given', () => {
            const achievements = new Achievements({ limit: '' }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if string is given', () => {
            const achievements = new Achievements({ limit: 'tralialia' }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if arrays is given', () => {
            const achievements = new Achievements({ limit: [] }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if object is given', () => {
            const achievements = new Achievements({ limit: {} }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })
    
    test('limit is invalid if null is given', () => {
            const achievements = new Achievements({ limit: null }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })
    
    test('limit is invalid if Infinity is given', () => {
            const achievements = new Achievements({ limit: Infinity }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if NaN is given', () => {
            const achievements = new Achievements({ limit: NaN }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if number less than 1 is given', () => {
            const achievements = new Achievements({ limit: -1 }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('limit is invalid if number with decimals is given', () => {
            const achievements = new Achievements({ limit: 1.5 }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('true if number is given', () => {
            const achievements = new Achievements({ limit: 4 }); 
            expect(achievements.isValidLimit()).toBeTruthy();
        })
})