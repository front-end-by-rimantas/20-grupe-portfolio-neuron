import { isValidAchievementItem } from './isValidAchievementItem.js';

//Achievement item tests
// {
//     number: 6000,
//     label: 'Complete Projects'
// }
describe('check if achievements item is valid', () => {
    test('', () => {
            expect(isValidAchievementItem([])).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({})).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem(null)).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem(true)).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: '', label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: NaN, label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: Infinity, label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: undefined, label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: -10, label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: 10.10, label: '' })).toBeFalsy();
        })
        
    test('', () => {
            expect(isValidAchievementItem({ number: 10, label: 10 })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: 10, label: '' })).toBeFalsy();
        })

    test('', () => {
            expect(isValidAchievementItem({ number: 123, label: 'tra lia lia'})).toBeTruthy();
        })
})
