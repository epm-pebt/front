import { render } from '@testing-library/react';
import RecipeTitle from 'src/stories/components/atomic/text-elements/RecipeTitle';

describe('RecipeTitle', () => {
    it('renders without crashing and displays the correct title', () => {
        const { getByText } = render(<RecipeTitle title="Test title" />);
        expect(getByText('Test title')).toBeInTheDocument();
    });

    it('does not render VeganIcon when isVegan is false', () => {
        const { queryByTitle } = render(
            <RecipeTitle title="Test title" isVegan={false} />
        );
        expect(queryByTitle('Test title is a vegan dish.')).toBeNull();
    });

    it('renders VeganIcon when isVegan is true', () => {
        const { getByTitle } = render(
            <RecipeTitle title="Test title" isVegan={true} />
        );
        expect(getByTitle('Test title is a vegan dish.')).toBeInTheDocument();
    });
});
