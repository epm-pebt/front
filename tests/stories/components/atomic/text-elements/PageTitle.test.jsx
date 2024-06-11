import { render, screen } from '@testing-library/react';
import PageTitle from '../../../../../src/stories/components/atomic/text-elements/PageTitle';

describe('PageTitle', () => {
    const title = 'Test Title';

    it('renders correctly', () => {
        render(<PageTitle title={title} onAnimation={false} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('displays the title prop', () => {
        render(<PageTitle title={title} onAnimation={false} />);
        expect(screen.getByText(title)).toHaveTextContent(title);
    });

    it('sets aria-hidden attribute based on hasNoRecipes prop', () => {
        const { rerender } = render(
            <PageTitle title={title} onAnimation={false} hasNoRecipes={true} />
        );
        expect(screen.getByText(title)).toHaveAttribute('aria-hidden', 'true');

        rerender(
            <PageTitle title={title} onAnimation={false} hasNoRecipes={false} />
        );
        expect(screen.getByText(title)).not.toHaveAttribute(
            'aria-hidden',
            'true'
        );
    });

    it('sets opacity style based on onAnimation prop', () => {
        const { rerender } = render(
            <PageTitle title={title} onAnimation={false} />
        );
        expect(screen.getByText(title)).toHaveStyle('opacity: 1');

        rerender(<PageTitle title={title} onAnimation={true} />);
        expect(screen.getByText(title)).toHaveStyle('opacity: 0');
    });
});
