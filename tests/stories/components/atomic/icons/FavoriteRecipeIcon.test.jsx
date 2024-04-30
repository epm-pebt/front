import { render } from '@testing-library/react';
import FavoriteRecipeIcon from 'src/stories/components/atomic/icons/FavoriteRecipeIcon';
import { ecoBitesUi } from 'src/theme';

describe('FavoriteRecipeIcon', () => {
    it('renders without crashing and should have correct color when not selected', () => {
        // Render the icon in an unselected state
        const { getByRole } = render(
            <FavoriteRecipeIcon title="Test Title" selected={false} />
        );

        // Get SVG element
        const icon = getByRole('img');

        // Check fillColor style
        const color = window.getComputedStyle(icon).fill;
        expect(color).toBe('#FFFFFF');
    });

    it('should have correct color when selected', () => {
        // Render the icon in a selected state
        const { getByRole } = render(
            <FavoriteRecipeIcon title="Test Title" selected={true} />
        );

        const icon = getByRole('img');

        const color = window.getComputedStyle(icon).fill;
        expect(color).toBe(ecoBitesUi.palette.pink.secondary);
    });
});
