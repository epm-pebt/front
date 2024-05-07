import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from 'src/stories/components/organisms/search-form/SearchForm';
import { recipeCardMockData } from 'src/stories/mocks/data';

describe('SearchForm Component', () => {
    it('renders without crashing', () => {
        const setRecipes = jest.fn();
        const { getByRole } = render(
            <SearchForm
                recipes={[...recipeCardMockData]}
                setRecipes={setRecipes}
            />
        );
        expect(getByRole('textbox')).toBeInTheDocument();
    });

    it('calls handleSearchChange function with input on change', async () => {
        const setRecipes = jest.fn();
        const { getByRole } = render(
            <SearchForm
                recipes={[...recipeCardMockData]}
                setRecipes={setRecipes}
            />
        );
        const searchText = 'Vega';

        fireEvent.change(getByRole('textbox'), {
            target: { value: searchText },
        });

        await waitFor(() => {
            expect(getByRole('textbox').value).toBe(searchText);
        });
    });

    it('calls handleSubmit function when form is submitted', () => {
        const setRecipes = jest.fn();
        const { queryByTestId } = render(
            <SearchForm
                recipes={[...recipeCardMockData]}
                setRecipes={setRecipes}
            />
        );

        fireEvent.submit(queryByTestId('search-form'));

        expect(setRecipes).toHaveBeenCalled();
    });
});
