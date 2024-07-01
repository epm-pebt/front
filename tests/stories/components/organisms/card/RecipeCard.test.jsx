import { render, screen, within } from '@testing-library/react';
import { CARD_IMAGE_HEIGHT } from 'src/stories/constants';
import imagePlaceholder from 'src/stories/assets/recipe-image-default.png';
import RecipeCard from 'src/stories/components/organisms/card/RecipeCard';

const recipe = {
    title: 'Delicious Recipe',
    time: 30,
    image: 'test-image.jpg',
    alt: 'Test Image',
    isFavorite: true,
    isVegan: true,
};

describe('RecipeCard', () => {
    it('renders correctly', () => {
        render(<RecipeCard recipe={recipe} isLoading={false} />);
        expect(screen.getByText('Delicious Recipe')).toBeInTheDocument();
    });

    it('renders RecipeCardSkeleton when isLoading is true', () => {
        render(<RecipeCard recipe={recipe} isLoading={true} />);
        expect(screen.getByTestId('recipe-card-skeleton')).toBeInTheDocument();
    });

    it('renders image, title, and time correctly', () => {
        render(<RecipeCard recipe={recipe} isLoading={false} />);
        const imgElement = screen.getAllByRole('img')[0];
        const parentElement = imgElement.closest('div');

        expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
        expect(imgElement).toHaveAttribute('alt', 'Test Image');
        expect(parentElement).toHaveStyle(`height: ${CARD_IMAGE_HEIGHT}px`);
        expect(screen.getByText('Delicious Recipe')).toBeInTheDocument();
        expect(screen.getByText('30m')).toBeInTheDocument();
    });

    it('renders FavoriteRecipeIconButton when isFavorite is true', () => {
        render(<RecipeCard recipe={recipe} isLoading={false} />);
        const favoriteIcon = screen.getByTestId('FavoriteIcon');
        expect(favoriteIcon).toBeInTheDocument();
        const titleElement = within(favoriteIcon).getByText(
            'Delicious Recipe is favorite recipe.'
        );
        expect(titleElement).toBeInTheDocument();
    });

    it('renders default image when image is not provided', () => {
        const customRecipe = { ...recipe, image: undefined };
        render(<RecipeCard recipe={customRecipe} isLoading={false} />);
        const imgElement = screen.getAllByRole('img')[0];
        expect(imgElement).toHaveAttribute('src', imagePlaceholder);
    });

    it('does not render RecipeDuration if time is not provided', () => {
        const customRecipe = { ...recipe, time: undefined };
        render(<RecipeCard recipe={customRecipe} isLoading={false} />);
        expect(screen.queryByText('30m')).not.toBeInTheDocument();
    });

    it('does not render FavoriteRecipeIconButton if isFavorite is false', () => {
        const customRecipe = { ...recipe, isFavorite: false };
        render(<RecipeCard recipe={customRecipe} isLoading={false} />);
        expect(screen.queryByTestId('FavoriteIcon')).not.toBeInTheDocument();
    });
});
