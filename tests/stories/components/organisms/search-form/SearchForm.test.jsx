import { render, fireEvent } from '@testing-library/react';
import SearchForm from 'src/stories/components/organisms/search-form/SearchForm';
import { useSearchHandlers } from 'src/stories/components/organisms/search-form/hooks/useSearchHandlers';

jest.mock(
    'src/stories/components/organisms/search-form/hooks/useSearchHandlers'
);

const mockActivateAnimation = jest.fn();
const mockBackToHome = jest.fn();
const mockOnSearch = jest.fn();
const mockPreviousLocation = {};

describe('SearchForm', () => {
    const mockHandleSearchChange = jest.fn();
    const mockHandleClearSearch = jest.fn();
    const mockHandleSubmit = jest.fn();
    const mockInputValue = 'test';

    beforeEach(() => {
        useSearchHandlers.mockReturnValue({
            errors: [],
            handleClearSearch: mockHandleClearSearch,
            handleSearchChange: mockHandleSearchChange,
            handleSubmit: mockHandleSubmit,
            inputValue: mockInputValue,
        });
    });

    it('renders correctly', () => {
        const { getByLabelText, getByTestId } = render(
            <SearchForm
                activateAnimation={mockActivateAnimation}
                onAnimation={true}
                backToHome={mockBackToHome}
                onSearch={mockOnSearch}
                previousLocation={mockPreviousLocation}
            />
        );

        expect(getByLabelText('Back to home page.')).toBeInTheDocument();
        expect(getByTestId('search-input')).toBeInTheDocument();
    });

    it('calls backToHome and handleClearSearch when the back button is clicked', () => {
        const { getByLabelText } = render(
            <SearchForm
                activateAnimation={mockActivateAnimation}
                onAnimation={true}
                backToHome={mockBackToHome}
                onSearch={mockOnSearch}
                previousLocation={mockPreviousLocation}
            />
        );

        fireEvent.click(getByLabelText('Back to home page.'));
        expect(mockBackToHome).toHaveBeenCalled();
        expect(mockHandleClearSearch).toHaveBeenCalled();
    });

    it('handles input changes correctly', () => {
        const { getByTestId } = render(
            <SearchForm
                activateAnimation={mockActivateAnimation}
                onAnimation={true}
                backToHome={mockBackToHome}
                onSearch={mockOnSearch}
                previousLocation={mockPreviousLocation}
            />
        );
        const searchInput = getByTestId('search-input');
        console.log({ searchInput });
        expect(searchInput).toBeInTheDocument();
        fireEvent.change(searchInput, {
            target: { value: 'new search term' },
        });
        expect(mockHandleSearchChange).toHaveBeenCalled();
    });

    it('handles form submission correctly', () => {
        const { getByTestId } = render(
            <SearchForm
                activateAnimation={mockActivateAnimation}
                onAnimation={true}
                backToHome={mockBackToHome}
                onSearch={mockOnSearch}
                previousLocation={mockPreviousLocation}
            />
        );

        fireEvent.submit(getByTestId('search-form'));
        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});
