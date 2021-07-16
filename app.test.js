import { it, expect } from '@jest/globals';
import { passwordStrengthCheck } from './app';
import { passwordVisibility } from './app';

describe('password checker', () => {
    it('should return progressBarValue 40 when inputLength is 9', () => {
        const result = passwordStrengthCheck(9);
        expect(result[0]).toEqual(40);
    })
    it('should return OK when inputLength is 9', () => {
        const result = passwordStrengthCheck(9);
        expect(result[1]).toEqual('OK');
    })
    it('should return [0, "Pretty bad"] when inputLength is 1', () => {
        const result = passwordStrengthCheck(1);
        expect(result).toEqual([0, 'Pretty bad']);
    })
    it('should return [20, "Weak"] when inputLength is 5', () => {
        const result = passwordStrengthCheck(5);
        expect(result).toEqual([20, "Weak"]);
    })
    it('should return [60, "Good"] when inputLength is 14', () => {
        const result = passwordStrengthCheck(14);
        expect(result).toEqual([60, "Good"]);
    })
    it('should return [80, "Very good"] when inputLength is 18', () => {
        const result = passwordStrengthCheck(18);
        expect(result).toEqual([80, "Very good"]);
    })
    it('should return [100, "Excellent"] when inputLength is 21', () => {
        const result = passwordStrengthCheck(21);
        expect(result).toEqual([100, "Excellent"]);
    })
})