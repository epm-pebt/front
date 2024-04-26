import testTermOnString from 'src/utils/testTermOnString';

describe('testTermOnString function', () => {
    test('should return true if the term exists within the string', () => {
        expect(testTermOnString('hello', 'Hello world')).toBe(true);
        expect(testTermOnString('world', 'Hello world')).toBe(true);
    });

    test('should return false if the term does not exists within the string', () => {
        expect(testTermOnString('goodbye', 'Hello world')).toBe(false);
    });

    test('should return true if the term exists within the string and is case insensitive', () => {
        expect(testTermOnString('hELLo', 'Hello world')).toBe(true);
        expect(testTermOnString('WORLD', 'Hello world')).toBe(true);
    });

    test('should always fail if the term is less than 2 characters long', () => {
        expect(testTermOnString('o', 'Hello world')).toBe(false);
        expect(testTermOnString('o', 'Oh hello world')).toBe(false);
        expect(testTermOnString('a', 'A beautiful day')).toBe(false);
    });

    test('should match terms part of a word if term is 2 or more characters long', () => {
        expect(testTermOnString('or', 'Hello world')).toBe(true);
    });
});
