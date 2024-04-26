import { render } from '@testing-library/react';
import { PageTitle } from 'src/stories/components/atomic/text-elements/PageTitle';

describe('PageTitle', () => {
    it('renders without crashing and renders the given title', () => {
        const { getByText } = render(<PageTitle title="Test Title" />);
        expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the title with h1 tag', () => {
        const { container } = render(<PageTitle title="Test Title" />);
        expect(container.querySelector('h1')).toBeInTheDocument();
    });
});
