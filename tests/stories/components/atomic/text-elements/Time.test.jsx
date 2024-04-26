import { render } from '@testing-library/react';
import Time from 'src/stories/components/atomic/text-elements/Time';

describe('Time Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Time minutes={60} />);
        expect(container).toBeTruthy();
    });

    it('renders correct duration for given minutes', () => {
        const { getByText } = render(<Time minutes={90} />);
        expect(getByText('1h 30m')).toBeInTheDocument();
    });

    it('renders the correct variant', () => {
        const { container } = render(
            <Time minutes={60} variant="Paragraph/P12" />
        );
        expect(container.firstChild).toHaveClass('MuiTypography-Paragraph/P12');
    });

    it('has default variant when no variant prop is passed', () => {
        const { container } = render(<Time minutes={60} />);
        expect(container.firstChild).toHaveClass('MuiTypography-Emphasis/E12');
    });
});
