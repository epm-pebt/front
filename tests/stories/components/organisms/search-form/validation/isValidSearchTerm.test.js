import isValidSearchTerm from 'src/stories/components/organisms/search-form/validation/isValidSearchTerm';
import {
    SEARCH_TERM_IS_LONG,
    SEARCH_TERM_IS_SHORT,
    SEARCH_TERM_HAS_FORBIDDEN_CHARACTERS,
} from 'src/stories/constants';

describe('isValidSearchTerm', () => {
    it('should return valid for an empty term', () => {
        const result = isValidSearchTerm('');
        expect(result).toEqual({
            isValid: true,
            errorMessage: '',
        });
    });

    it('should return invalid for a term that is too short', () => {
        const result = isValidSearchTerm('a');
        expect(result).toEqual({
            isValid: false,
            errorMessage: SEARCH_TERM_IS_SHORT,
        });
    });

    it('should return valid for a term that is exactly 2 characters long', () => {
        const result = isValidSearchTerm('ab');
        expect(result).toEqual({
            isValid: true,
            errorMessage: '',
        });
    });

    it('should return valid for a term that is exactly 100 characters long', () => {
        const term = 'a'.repeat(100);
        const result = isValidSearchTerm(term);
        expect(result).toEqual({
            isValid: true,
            errorMessage: '',
        });
    });

    it('should return invalid for a term that is too long', () => {
        const term = 'a'.repeat(101);
        const result = isValidSearchTerm(term);
        expect(result).toEqual({
            isValid: false,
            errorMessage: SEARCH_TERM_IS_LONG,
        });
    });

    it('should return invalid for a term with forbidden characters', () => {
        const result = isValidSearchTerm('hello@');
        expect(result).toEqual({
            isValid: false,
            errorMessage: SEARCH_TERM_HAS_FORBIDDEN_CHARACTERS,
        });
    });

    it('should return valid for a term with allowed characters', () => {
        const result = isValidSearchTerm('hello world');
        expect(result).toEqual({
            isValid: true,
            errorMessage: '',
        });
    });

    it('should return valid for a term with allowed special characters', () => {
        const result = isValidSearchTerm('hello-world');
        expect(result).toEqual({
            isValid: true,
            errorMessage: '',
        });
    });
});
