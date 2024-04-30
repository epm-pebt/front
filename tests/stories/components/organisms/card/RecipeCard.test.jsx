import { render } from '@testing-library/react';
import RecipeCard from 'src/stories/components/organisms/card/RecipeCard';
import getFilenameFromUrl from 'src/utils/getFilenameFromUrl';
import imagePlaceholder from 'src/stories/assets/recipe-image-default.png';
import { recipeCardMockData, image } from 'src/stories/mocks/data';

describe('RecipeCard Component', () => {
    const testProps = recipeCardMockData[0];
    it('renders correctly', () => {
        const { asFragment } = render(<RecipeCard recipe={testProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<RecipeCard recipe={testProps} />);
        expect(getByText('Veggie Curry')).toBeInTheDocument();
    });

    it('shows FavoriteRecipeIcon when isFavorite is true', () => {
        const favoriteRecipe = {
            ...testProps,
            isFavorite: true,
        };
        const { queryByTestId } = render(
            <RecipeCard recipe={favoriteRecipe} />
        );
        expect(queryByTestId('favorite-icon')).toBeInTheDocument();
    });

    it('does not show FavoriteRecipeIcon when isFavorite is false', () => {
        const { queryByTestId } = render(
            <RecipeCard isFavorite={false} recipe={testProps} />
        );
        expect(queryByTestId('favorite-icon')).toBeNull();
    });

    it('renders img with correct src and alt attributes', () => {
        const { getByRole } = render(<RecipeCard recipe={testProps} />);
        const imgElement = getByRole('img');
        expect(imgElement.src).toBe(image);
        expect(imgElement.alt).toBe('veggie curry');
    });

    it('renders img with default src when no imgUrl prop is passed', () => {
        const withNoImage = {
            ...testProps,
            imgUrl: undefined,
            alt: undefined,
        };
        const { getByAltText } = render(<RecipeCard recipe={withNoImage} />);
        const imgElement = getByAltText('Awaiting image');
        expect(getFilenameFromUrl(imgElement.src)).toBe(imagePlaceholder);
    });
});
