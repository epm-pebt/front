import {
    SEARCH_TERM_IS_LONG,
    SEARCH_TERM_IS_SHORT,
    SEARCH_TERM_HAS_FORBIDDEN_CHARACTERS,
} from '../../../../constants';

const isValidSearchTerm = (term) => {
    // Reject if input is too short
    if (term.length > 0 && term.length < 2) {
        return {
            isValid: false,
            errorMessage: SEARCH_TERM_IS_SHORT,
        };
    }

    // Reject if input is too long
    if (term.length > 100) {
        return {
            isValid: false,
            errorMessage: SEARCH_TERM_IS_LONG,
        };
    }

    // Reject if input includes unsupported special characters
    if (term.length > 0 && !/^[\w\s-]+$/.test(term)) {
        return {
            isValid: false,
            errorMessage: SEARCH_TERM_HAS_FORBIDDEN_CHARACTERS,
        };
    }

    // If all checks pass, the term is valid
    return {
        isValid: true,
        errorMessage: '',
    };
};

export default isValidSearchTerm;
