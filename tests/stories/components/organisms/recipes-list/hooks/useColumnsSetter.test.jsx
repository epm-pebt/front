import { render, screen, act, waitFor } from '@testing-library/react';
import useColumnsSetter from 'src/stories/components/organisms/recipes-list/hooks/useColumnsSetter';
import { breakpointValues } from 'src/theme';

const mockRecipes = [
    { id: '1', title: 'Recipe 1', image: 'image1.jpg', time: 30 },
    { id: '2', title: 'Recipe 2', image: 'image2.jpg', time: 20 },
    { id: '3', title: 'Recipe 3', image: 'image3.jpg', time: 25 },
];

// eslint-disable-next-line react/prop-types
const TestComponent = ({ recipes, status }) => {
    const columns = useColumnsSetter(recipes, status);
    return (
        <div>
            {columns.map((column, index) => (
                <div key={index} data-testid={`column-${index}`}>
                    {column.map((recipe) => (
                        <div
                            key={recipe.id}
                            data-testid={`recipe-${recipe.id}`}
                        >
                            {recipe.title}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

describe('useColumnsSetter', () => {
    const { xs: BREAKPOINT } = breakpointValues;
    beforeEach(() => {
        // Mock window innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024,
        });

        // Mock window resize event
        window.dispatchEvent = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set columns to 2 when window width is greater than breakpoint', () => {
        render(<TestComponent recipes={mockRecipes} status="succeeded" />);
        const columns = screen.getAllByTestId(/^column-/);
        expect(columns).toHaveLength(2);
    });

    it('should set columns to 1 when window width is less than or equal to breakpoint', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: BREAKPOINT,
        });

        render(<TestComponent recipes={mockRecipes} status="succeeded" />);

        act(() => {
            window.dispatchEvent(new Event('resize'));
        });

        const columns = screen.getAllByTestId(/^column-/);
        expect(columns).toHaveLength(1);
    });

    it('should distribute items into columns correctly', () => {
        render(<TestComponent recipes={mockRecipes} status="succeeded" />);
        const column0 = screen.getByTestId('column-0');
        const column1 = screen.getByTestId('column-1');

        expect(column0).toHaveTextContent('Recipe 1');
        expect(column0).toHaveTextContent('Recipe 3');
        expect(column1).toHaveTextContent('Recipe 2');
    });

    it('should handle loading state correctly', () => {
        render(<TestComponent recipes={mockRecipes} status="loading" />);
        const columns = screen.getAllByTestId(/^column-/);

        expect(columns).toHaveLength(2);
        const totalItems = columns.reduce(
            (acc, column) => acc + column.childElementCount,
            0
        );
        expect(totalItems).toBe(10);
    });

    it('should update columns on window resize', () => {
        let columns;
        render(<TestComponent recipes={mockRecipes} status="succeeded" />);

        act(() => {
            window.innerWidth = BREAKPOINT;
            window.dispatchEvent(new Event('resize'));
        });
        waitFor(() => {
            columns = screen.getAllByTestId(/^column-/);
            expect(columns).toHaveLength(1);
        });

        act(() => {
            window.innerWidth = BREAKPOINT + 1;
            window.dispatchEvent(new Event('resize'));
        });

        waitFor(() => {
            columns = screen.getAllByTestId(/^column-/);
            expect(columns).toHaveLength(2);
        });
    });

    it('should update displayedItemsCount when status is succeeded', () => {
        const { rerender } = render(
            <TestComponent recipes={mockRecipes} status="loading" />
        );

        let columns = screen.getAllByTestId(/^column-/);
        let totalItems = columns.reduce(
            (acc, column) => acc + column.childElementCount,
            0
        );
        expect(totalItems).toBe(10);

        rerender(<TestComponent recipes={mockRecipes} status="succeeded" />);

        columns = screen.getAllByTestId(/^column-/);
        expect(columns[0]).toHaveTextContent('Recipe 1');
        expect(columns[0]).toHaveTextContent('Recipe 3');
        expect(columns[1]).toHaveTextContent('Recipe 2');
    });
});
