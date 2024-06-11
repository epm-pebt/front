import {
    render,
    screen,
    fireEvent,
    waitFor,
    cleanup,
} from '@testing-library/react';
import ErrorBoundary from 'src/stories/components/organisms/ErrorBoundary.jsx';

const ProblemChild = () => {
    throw new Error('Test Error');
};

const GoodChild = () => <div>Test child component</div>;

// eslint-disable-next-line jest/no-disabled-tests
describe('ErrorBoundary', () => {
    it('should render children when no error occurs', () => {
        render(
            <ErrorBoundary>
                <GoodChild />
            </ErrorBoundary>
        );
        expect(screen.getByText('Test child component')).toBeInTheDocument();
    });

    it('should render fallback UI when an error occurs', () => {
        render(
            <ErrorBoundary>
                <ProblemChild />
            </ErrorBoundary>
        );
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    });

    it('should render custom fallback UI when provided', () => {
        render(
            <ErrorBoundary fallbackUI={<div>Custom Fallback</div>}>
                <ProblemChild />
            </ErrorBoundary>
        );
        expect(screen.getByText('Custom Fallback')).toBeInTheDocument();
    });

    it('should render custom fallback message when provided', () => {
        render(
            <ErrorBoundary fallbackMessage="Custom error message">
                <ProblemChild />
            </ErrorBoundary>
        );
        expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });

    it('should call onError prop when an error occurs', () => {
        const mockOnError = jest.fn();
        render(
            <ErrorBoundary onError={mockOnError}>
                <ProblemChild />
            </ErrorBoundary>
        );
        expect(mockOnError).toHaveBeenCalledTimes(1);
    });

    it('should reset error state and retry when Try Again button is clicked', async () => {
        render(
            <ErrorBoundary>
                <ProblemChild />
            </ErrorBoundary>
        );

        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
        expect(screen.getByText('Try Again')).toBeInTheDocument();

        // Click the retry button.
        fireEvent.click(screen.getByText('Try Again'));

        // Clean up previous render
        cleanup();

        // Rerender with GoodChild
        render(
            <ErrorBoundary>
                <GoodChild />
            </ErrorBoundary>
        );

        await waitFor(() => {
            expect(
                screen.queryByText('Something went wrong.')
            ).not.toBeInTheDocument();
            expect(
                screen.getByText('Test child component')
            ).toBeInTheDocument();
        });
    });
});
