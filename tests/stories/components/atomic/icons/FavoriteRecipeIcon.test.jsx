import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteRecipeIconButton from 'src/stories/components/atomic/icons/FavoriteRecipeIconButton';

describe('FavoriteRecipeIconButton', () => {
    const recipeName = 'Test Recipe';
    const onClickMock = jest.fn();

    it('renders without crashing', () => {
        render(<FavoriteRecipeIconButton recipeName={recipeName} />);
        expect(
            screen.getByTitle(`${recipeName} is favorite recipe.`)
        ).toBeInTheDocument();
    });

    it('renders button when onClick is provided', () => {
        render(
            <FavoriteRecipeIconButton
                recipeName={recipeName}
                onClick={onClickMock}
            />
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders icon when onClick is not provided', () => {
        render(<FavoriteRecipeIconButton recipeName={recipeName} />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('button aria-label is correct based on selected prop', () => {
        const { rerender } = render(
            <FavoriteRecipeIconButton
                recipeName={recipeName}
                onClick={onClickMock}
                selected={false}
            />
        );
        expect(screen.getByRole('button')).toHaveAttribute(
            'aria-label',
            `Add ${recipeName} to favorites`
        );

        rerender(
            <FavoriteRecipeIconButton
                recipeName={recipeName}
                onClick={onClickMock}
                selected={true}
            />
        );
        expect(screen.getByRole('button')).toHaveAttribute(
            'aria-label',
            `Remove ${recipeName} from favorites`
        );
    });

    it('icon aria-label is correct', () => {
        render(<FavoriteRecipeIconButton recipeName={recipeName} />);
        expect(
            screen.getByTitle(`${recipeName} is favorite recipe.`)
        ).toBeInTheDocument();
    });

    it('calls onClick function when button is clicked', () => {
        render(
            <FavoriteRecipeIconButton
                recipeName={recipeName}
                onClick={onClickMock}
            />
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
