import { render } from '@testing-library/react';
import ClockIcon from 'src/stories/components/atomic/icons/ClockIcon';

describe('ClockIcon', () => {
    it('renders without crashing with defaults', () => {
        const { container } = render(<ClockIcon />);
        const svgElement = container.getElementsByTagName('svg')[0];
        expect(svgElement).toHaveClass('MuiSvgIcon-fontSizeSmall');
    });

    it('renders without crashing and applies right size for small', () => {
        const { container } = render(<ClockIcon size="small" />);
        const svgElement = container.getElementsByTagName('svg')[0];
        expect(svgElement).toHaveClass('MuiSvgIcon-fontSizeSmall');
    });

    it('applies right size for medium', () => {
        const { container } = render(<ClockIcon size="medium" />);
        const svgElement = container.getElementsByTagName('svg')[0];
        expect(svgElement).toHaveClass('MuiSvgIcon-fontSizeMedium');
    });

    it('applies right size for large', () => {
        const { container } = render(<ClockIcon size="large" />);
        const svgElement = container.getElementsByTagName('svg')[0];
        expect(svgElement).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });
});
