import { render, screen } from '@testing-library/react';
import ListIcon from 'src/stories/components/atomic/icons/ListIcon';
import { ecoBitesUi } from '../../../../../src/theme';

describe('ListIcon', () => {
    it('renders without crashing', () => {
        render(<ListIcon />);
        const icon = screen.getByRole('img');
        expect(icon).toBeInTheDocument();
    });

    it('uses default fill color when not provided', () => {
        render(<ListIcon />);
        const path = document.querySelector('path');
        expect(path).toHaveAttribute('fill', ecoBitesUi.palette.grey.secondary);
    });

    it('uses provided fill color', () => {
        render(<ListIcon fill={ecoBitesUi.palette.green.primary} />);
        const path = document.querySelector('path');
        expect(path).toHaveAttribute('fill', ecoBitesUi.palette.green.primary);
    });
});
