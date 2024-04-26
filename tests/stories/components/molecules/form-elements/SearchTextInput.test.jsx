import { render, fireEvent } from '@testing-library/react';
import SearchTextInput from 'src/stories/components/molecules/inputs/SearchTextInput';

describe('SearchTextInput Component', () => {
    const handleSearchChange = jest.fn();

    it('renders without crashing', () => {
        const { getByRole } = render(
            <SearchTextInput
                searchTerm=""
                handleSearchChange={handleSearchChange}
            />
        );
        expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('calls handleSearchChange on input change', () => {
        const { getByRole } = render(
            <SearchTextInput
                searchTerm=""
                handleSearchChange={handleSearchChange}
            />
        );
        fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
        expect(handleSearchChange).toHaveBeenCalled();
    });

    it('has the correct value', () => {
        const { getByRole } = render(
            <SearchTextInput
                searchTerm="test"
                handleSearchChange={handleSearchChange}
            />
        );
        expect(getByRole('textbox').value).toBe('test');
    });
});
