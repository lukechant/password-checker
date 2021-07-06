import { it } from '@jest/globals';
import { passwordLengthCheck } from './app';
import { strengthAssessor } from './app';

describe('password checker', () => {
    it('should return lengthValue 40 when userInputLength is 9', () => {
        const result = passwordLengthCheck()
    })
})