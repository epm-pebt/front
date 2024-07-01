import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../../../redux-toolkit/slices/recipes';
import isValidSearchTerm from '../validation/isValidSearchTerm';

export const useSearchHandlers = (onSearch, previousLocation) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchTerm = useSelector((state) => state.recipes.searchTerm);
    const isMounted = useRef(false);
    const [inputValue, setInputValue] = useState(searchTerm || '');
    const [errors, setErrors] = useState([]);

    const handleSearchChange = useCallback((event) => {
        setErrors([]);
        const term = event.target.value;
        setInputValue(term);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
    }, []);

    const handleClearSearch = useCallback(() => {
        setInputValue('');
        setErrors([]);
        dispatch(setSearchTerm(''));
        onSearch('');
    }, [dispatch, onSearch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const validationResult = isValidSearchTerm(inputValue);
            if (validationResult.isValid) {
                dispatch(setSearchTerm(inputValue));
                onSearch(inputValue);
            } else {
                setErrors([{ errorMessage: validationResult.errorMessage }]);
                // Stop search if validation fails
                onSearch('');
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch, inputValue, onSearch]);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else if (
            previousLocation.current !== location.pathname &&
            location.pathname === '/'
        ) {
            onSearch(inputValue);
        }
        previousLocation.current = location.pathname;
    }, [inputValue, location.pathname, onSearch, previousLocation]);

    return {
        inputValue,
        errors,
        handleSearchChange,
        handleSubmit,
        handleClearSearch,
    };
};
