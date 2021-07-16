import { it, expect } from '@jest/globals';
import { passwordLengthCheck } from './app';
import { strengthAssessor } from './app';

describe('password checker', () => {
    it('should return lengthValue 40 when inputLength is 9', () => {
        const result = passwordLengthCheck(9);
        expect(result).toEqual(40);
    })
})