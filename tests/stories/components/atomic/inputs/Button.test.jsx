import { render } from '@testing-library/react';
import Button from 'src/stories/components/atomic/inputs/Button';

describe('Button', () => {
    it('renders without crashing and displays the correct label', () => {
        const { getByText } = render(<Button label="Test Button" />);
        expect(getByText('Test Button')).toBeInTheDocument();
    });

    it('applies correct variant for primary', () => {
        const { getByRole } = render(
            <Button label="Test Button" variant="primary" />
        );
        expect(getByRole('button')).toHaveClass('MuiButton-primary');
    });

    it('applies correct variant for secondary', () => {
        const { getByRole } = render(
            <Button label="Test Button" variant="secondary" />
        );
        expect(getByRole('button')).toHaveClass('MuiButton-secondary');
    });

    it('applies correct variant for tertiary', () => {
        const { getByRole } = render(
            <Button label="Test Button" variant="tertiary" />
        );
        expect(getByRole('button')).toHaveClass('MuiButton-tertiary');
    });

    it('applies correct variant for tag', () => {
        const { getByRole } = render(
            <Button label="Test Button" variant="tag" />
        );
        expect(getByRole('button')).toHaveClass('MuiButton-tag');
    });

    it('applies correct variant for tag-selected', () => {
        const { getByRole } = render(
            <Button label="Test Button" variant="tag-selected" />
        );
        expect(getByRole('button')).toHaveClass('MuiButton-tag-selected');
    });
});
