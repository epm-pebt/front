import { render } from '@testing-library/react';
import RecipeDuration from 'src/stories/components/molecules/text-elements/RecipeDuration';

describe('RecipeDuration Component', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<RecipeDuration minutes={60} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<RecipeDuration minutes={60} />);
        expect(getByText('1h')).toBeInTheDocument();
    });

    it('shows ClockIcon when showClock is true', () => {
        const { getByTestId } = render(
            <RecipeDuration showClock={true} minutes={60} />
        );
        expect(getByTestId('clock-icon')).toBeInTheDocument();
    });

    it('does not show ClockIcon when showClock is false', () => {
        const { queryByTestId } = render(
            <RecipeDuration showClock={false} minutes={60} />
        );
        expect(queryByTestId('clock-icon')).toBeNull();
    });

    it('renders Time component with correct props', () => {
        const { container } = render(<RecipeDuration minutes={60} />);
        expect(container.querySelector('time').getAttribute('datetime')).toBe(
            'PT60M'
        );
    });
});
