import { describe } from 'node:test';
import { maxArea } from './index';

describe('maxArea()', () => {
    const testCases = [
        { testCase: [1,8,6,2,5,4,8,3,7], expected: 49 },
        { testCase: [1,1], expected: 1 },
        { testCase: [], expected: 0 },
        { testCase: [1,1,1,1,1], expected: 4 },
        { testCase: [4], expected: 0 },
        { testCase: [1,2], expected: 1 },
        { testCase: [4,3,2,1,4], expected: 16 },
        { testCase: [3,9,19,6,14,5,23,20,13,11,2], expected: 95 },
    ]

    it('should get the correct max area', () => {
        testCases.forEach(t => {
            expect(maxArea(t.testCase)).toBe(t.expected);
        })
    })
})