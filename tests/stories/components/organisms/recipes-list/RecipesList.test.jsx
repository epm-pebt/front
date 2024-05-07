import { render } from '@testing-library/react';
import RecipesList from 'src/stories/components/organisms/recipes-list/RecipesList';
import { recipeCardMockData } from 'src/stories/mocks/data';

describe('RecipesList Component', () => {
    it('renders without crashing', () => {
        const { container } = render(
            <RecipesList recipes={[...recipeCardMockData]} />
        );
        expect(container).toBeInTheDocument();
    });

    it('renders correct number of RecipeCard components', () => {
        const recipes = [...recipeCardMockData];
        const { getAllByRole } = render(<RecipesList recipes={recipes} />);
        expect(getAllByRole('link').length).toBe(recipes.length);
    });

    it('passes correct props to RecipeCard components', () => {
        const { getByText } = render(
            <RecipesList recipes={[...recipeCardMockData]} />
        );
        expect(getByText('Veggie Curry')).toBeInTheDocument();
        expect(
            getByText('Poached Salmon with Jasmine Rice')
        ).toBeInTheDocument();
    });
});
