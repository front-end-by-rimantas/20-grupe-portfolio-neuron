import { isValidAchievementItem } from './isValidAchievementItem.js';

//Achievement item tests
describe('check if achievements item is valid', () => {
    test('item is invalid if array is given', () => {
            expect(isValidAchievementItem([])).toBeFalsy();
        })

    test('item is invalid if empty object is given', () => {
            expect(isValidAchievementItem({})).toBeFalsy();
        })

    test('item is invalid if null is given', () => {
            expect(isValidAchievementItem(null)).toBeFalsy();
        })

    test('item is invalid if boolean is given', () => {
            expect(isValidAchievementItem(true)).toBeFalsy();
        })

    test('invalid if number or label is empty string is given', () => {
            expect(isValidAchievementItem({ number: '', label: '' })).toBeFalsy();
        })

    test('invalid if number is NaN', () => {
            expect(isValidAchievementItem({ number: NaN, label: '' })).toBeFalsy();
        })

    test('invalid if number is Infinity', () => {
            expect(isValidAchievementItem({ number: Infinity, label: '' })).toBeFalsy();
        })

    test('invalid if number is undefined', () => {
            expect(isValidAchievementItem({ number: undefined, label: '' })).toBeFalsy();
        })

    test('invalid if number is less than 1', () => {
            expect(isValidAchievementItem({ number: -10, label: '' })).toBeFalsy();
        })

    test('invalid if number is with decimals', () => {
            expect(isValidAchievementItem({ number: 10.10, label: '' })).toBeFalsy();
        })
        
    test('invalid if label is number', () => {
            expect(isValidAchievementItem({ number: 10, label: 10 })).toBeFalsy();
        })

    test('invalid if label is empty string', () => {
            expect(isValidAchievementItem({ number: 10, label: '' })).toBeFalsy();
        })

    test('true if number is number and label is not empty string', () => {
            expect(isValidAchievementItem({ number: 123, label: 'tra lia lia'})).toBeTruthy();
        })
})
