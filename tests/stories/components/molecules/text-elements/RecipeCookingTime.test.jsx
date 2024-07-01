import { render, screen } from '@testing-library/react';
import RecipeCookingTime from 'src/stories/components/molecules/text-elements/RecipeCookingTime';

describe('RecipeCookingTime Component', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<RecipeCookingTime time={45} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<RecipeCookingTime time={60} />);
        expect(getByText('1h')).toBeInTheDocument();
    });

    it('renders null when time is not provided', () => {
        const { container } = render(<RecipeCookingTime />);
        expect(container.firstChild).toBeNull();
    });

    it('displays the clock icon based on showClock prop', () => {
        const { rerender } = render(
            <RecipeCookingTime time={45} showClock={true} />
        );
        expect(screen.getByTestId('AccessTimeFilledIcon')).toBeInTheDocument();

        rerender(<RecipeCookingTime time={45} showClock={false} />);
        expect(
            screen.queryByTestId('AccessTimeFilledIcon')
        ).not.toBeInTheDocument();
    });

    it('passes correct props to Time component', () => {
        render(
            <RecipeCookingTime time={45} typographyVariant="Paragraph/P12" />
        );
        const timeElement = screen.getByText('45m');
        expect(timeElement).toHaveTextContent('45m');
    });
});
