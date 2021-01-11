import { Achievements } from './Achievements.js';

const achievementsHTML = `<section class="achievements container">
                            <div id="achievements_block" class="row">
                            </div>
                        </section>`


// params.selector tests
describe('check if parameters selector is valid', () => {
    test('', () => {
        const achievements = new Achievements({selector: 666}); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: '' }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: [] }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: {} }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: false }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: undefined }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: null }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        const achievements = new Achievements({ selector: NaN }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        document.body.innerHTML = achievementsHTML;
        const achievements = new Achievements({ selector: '#achievements' }); 
        expect(achievements.isValidSelector()).toBeFalsy();
    })

    test('', () => {
        document.body.innerHTML = achievementsHTML;
        const achievements = new Achievements({ selector: '#achievements_block' }); 
        expect(achievements.isValidSelector()).toBeTruthy();
    })
})

// params.data tests
describe('check if parameters data is valid', () => {
    test('', () => {
            const achievements = new Achievements({ data: [] }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('', () => {
            const achievements = new Achievements({ data: '' }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: 'tralialia' }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: 666 }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('', () => {
            const achievements = new Achievements({ data: {} }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: NaN }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: null }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: undefined }); 
            expect(achievements.isValidData()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ data: true }); 
            expect(achievements.isValidData()).toBeFalsy();
        })
    
    test('', () => {
            const achievements = new Achievements({ data: [{}] }); 
            expect(achievements.isValidData()).toBeTruthy();
        })
})

// limit tests
describe('check if limit is valid', () => {
    test('', () => {
            const achievements = new Achievements({ limit: '' }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: 'tralialia' }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: [] }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: {} }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })
    
    test('', () => {
            const achievements = new Achievements({ limit: null }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })
    
    test('', () => {
            const achievements = new Achievements({ limit: Infinity }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: NaN }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: -1 }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: 1.5 }); 
            expect(achievements.isValidLimit()).toBeFalsy();
        })

    test('', () => {
            const achievements = new Achievements({ limit: 4 }); 
            expect(achievements.isValidLimit()).toBeTruthy();
        })
})

