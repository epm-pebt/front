/* eslint-disable react/prop-types */
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { setSearchTerm } from 'src/redux-toolkit/slices/recipes';
import isValidSearchTerm from 'src/stories/components/organisms/search-form/validation/isValidSearchTerm';
import { useSearchHandlers } from 'src/stories/components/organisms/search-form/hooks/useSearchHandlers';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
}));

jest.mock('src/redux-toolkit/slices/recipes', () => ({
    setSearchTerm: jest.fn(),
}));

jest.mock(
    'src/stories/components/organisms/search-form/validation/isValidSearchTerm',
    () => jest.fn()
);

const mockState = {
    recipes: {
        searchTerm: '',
    },
};

const mockStore = {
    getState: jest.fn(() => mockState),
    dispatch: jest.fn(),
    subscribe: jest.fn(),
};

const store = mockStore;

const TestComponent = ({ onSearch, previousLocation }) => {
    const {
        inputValue,
        errors,
        handleSearchChange,
        handleSubmit,
        handleClearSearch,
    } = useSearchHandlers(onSearch, previousLocation);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleSearchChange}
                data-testid="search-input"
            />
            <button onClick={handleSubmit} data-testid="search-submit">
                Search
            </button>
            <button onClick={handleClearSearch} data-testid="clear-search">
                Clear
            </button>
            {errors.length > 0 && (
                <div data-testid="error-message">{errors[0].errorMessage}</div>
            )}
        </div>
    );
};

describe('useSearchHandlers', () => {
    let dispatchMock;
    let useLocationMock;
    let previousLocationMock;

    beforeEach(() => {
        dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);
        useSelector.mockImplementation((selector) =>
            selector(store.getState())
        );
        useLocationMock = { pathname: '/other-path' };
        useLocation.mockReturnValue(useLocationMock);
        previousLocationMock = { current: '/previous' };
        jest.clearAllMocks();
    });

    it('should initialize with correct default values', () => {
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={jest.fn()}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        expect(input.value).toBe('');
        expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
    });

    it('should update inputValue and call setErrors on handleSearchChange', () => {
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={jest.fn()}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        fireEvent.change(input, { target: { value: 'new term' } });
        expect(input.value).toBe('new term');
        expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
    });

    it('should call dispatch and onSearch with valid term after delay', async () => {
        isValidSearchTerm.mockReturnValue({ isValid: true });
        const onSearchMock = jest.fn();

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={onSearchMock}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        fireEvent.change(input, { target: { value: 'valid term' } });

        await waitFor(() => {
            expect(dispatchMock).toHaveBeenCalledWith(
                setSearchTerm('valid term')
            );
            expect(onSearchMock).toHaveBeenCalledWith('valid term');
        });
    });

    it('should set errors and stop search with invalid term', async () => {
        isValidSearchTerm.mockReturnValue({
            isValid: false,
            errorMessage: 'Invalid term',
        });
        const onSearchMock = jest.fn();

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={onSearchMock}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        fireEvent.change(input, { target: { value: 'invalid term' } });

        await waitFor(() => {
            expect(screen.getByTestId('error-message').textContent).toBe(
                'Invalid term'
            );
            expect(onSearchMock).toHaveBeenCalledWith('');
        });
    });

    it('should clear inputValue and errors on handleClearSearch', () => {
        const onSearchMock = jest.fn();

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={onSearchMock}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        const input = screen.getByTestId('search-input');
        const clearButton = screen.getByTestId('clear-search');

        fireEvent.change(input, { target: { value: 'term' } });
        fireEvent.click(clearButton);

        expect(input.value).toBe('');
        expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
        expect(dispatchMock).toHaveBeenCalledWith(setSearchTerm(''));
        expect(onSearchMock).toHaveBeenCalledWith('');
    });

    it('should call onSearch if location changes to root path', async () => {
        const onSearchMock = jest.fn();

        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <TestComponent
                        onSearch={onSearchMock}
                        previousLocation={previousLocationMock}
                    />
                </MemoryRouter>
            </Provider>
        );

        act(() => {
            previousLocationMock.current = '/other-path';
        });

        fireEvent.change(screen.getByTestId('search-input'), {
            target: { value: 'term' },
        });

        // Change location to root path
        act(() => {
            useLocationMock.pathname = '/';
            window.dispatchEvent(new PopStateEvent('popstate'));
        });

        await waitFor(() => {
            expect(onSearchMock).toHaveBeenCalledWith('term');
        });
    });
});
