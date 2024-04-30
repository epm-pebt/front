import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from 'src/stories/components/pages/search-recipes/SearchPage';
import { recipeCardMockData } from 'src/stories/mocks/data';
import { SEARCH_PAGE_TITLE } from '../../../src/stories/constants';

describe('SearchPage Component', () => {
    beforeEach(() => {
        render(<SearchPage data={[...recipeCardMockData]} />);
    });

    test('renders SearchPage without crashing', () => {
        const searchSection = screen.getByTestId('section-search');
        expect(searchSection).toBeInTheDocument();
    });

    test('renders the children components', () => {
        const pageTitle = screen.getByRole('heading', {
            name: SEARCH_PAGE_TITLE,
        });
        const searchBar = screen.getByTestId('search-form');
        const recipeList = screen.getByTestId('recipe-list');

        expect(pageTitle).toBeInTheDocument();
        expect(searchBar).toBeInTheDocument();
        expect(recipeList).toBeInTheDocument();
    });
});
