import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../../src/stories/components/ErrorBoundary';

// Component to purposely throw an error
const ErrorComponent = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary', () => {
    beforeAll(() => {
        // this silences the console.errors in Jest's output
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
    });

    test('should catch errors with componentDidCatch', () => {
        // Renders ErrorComponent within ErrorBoundary
        render(
            <ErrorBoundary>
                <ErrorComponent />
            </ErrorBoundary>
        );

        // Checks that ErrorBoundary caught the error and rendered error message
        expect(
            screen.getByText(/oops, something went wrong!/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/the error:/i)).toHaveTextContent(
            'The error: Error: Test error'
        );
    });
});
