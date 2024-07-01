import { render, screen, act } from '@testing-library/react';
import Masonry from 'src/stories/components/organisms/recipes-list/Masonry';
import { useInfiniteScrollingObserver } from 'src/stories/components/organisms/recipes-list/hooks/useInfiniteScrollingObserver';

jest.mock(
    'src/stories/components/organisms/recipes-list/hooks/useInfiniteScrollingObserver.jsx'
);

const mockRecipes = [
    { id: 1, title: 'Recipe 1', image: 'image1.jpg', time: 30 },
    { id: 2, title: 'Recipe 2', image: 'image2.jpg', time: 20 },
    { id: 3, title: 'Recipe 3', image: 'image3.jpg', time: 25 },
];

const mockFetchRecipesData = jest.fn(() => Promise.resolve().finally(() => {}));

describe('Masonry', () => {
    let observe;
    let unobserve;
    let disconnect;
    let observerCallback;

    beforeEach(() => {
        jest.clearAllMocks();
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn();

        useInfiniteScrollingObserver.mockImplementation(() => {
            observerCallback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        mockFetchRecipesData();
                    }
                });
            };
            return {
                observe,
                unobserve,
                disconnect,
            };
        });
    });

    it('renders correctly', async () => {
        await act(async () => {
            render(
                <Masonry
                    recipes={mockRecipes}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={true}
                    status="succeeded"
                    error={null}
                />
            );
        });
        expect(screen.getByText('Recipe 1')).toBeInTheDocument();
        expect(screen.getByText('Recipe 2')).toBeInTheDocument();
        expect(screen.getByText('Recipe 3')).toBeInTheDocument();
    }, 5000);

    it('displays error message when status is error', async () => {
        const mockError = { message: 'Error fetching recipes' };
        await act(async () => {
            render(
                <Masonry
                    recipes={mockRecipes}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={true}
                    status="error"
                    error={mockError}
                />
            );
        });
        expect(screen.getByText(/Error Fetching data/i)).toBeInTheDocument();
    });

    it('renders columns and recipes correctly', async () => {
        await act(async () => {
            render(
                <Masonry
                    recipes={mockRecipes}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={true}
                    status="succeeded"
                    error={null}
                />
            );
        });
        const columns = screen.getAllByText(/Recipe \d/);
        expect(columns.length).toBe(3);
    }, 5000);

    it('renders infinite scrolling element when not all pages are loaded and status is succeeded', async () => {
        await act(async () => {
            render(
                <Masonry
                    recipes={mockRecipes}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={false}
                    status="succeeded"
                    error={null}
                />
            );
        });

        const infiniteScrollTrigger = screen.getByTestId(
            'infinite-scroll-trigger'
        );
        expect(infiniteScrollTrigger).toBeInTheDocument();

        // Manually trigger the intersection observer callback
        await act(async () => {
            observerCallback([{ isIntersecting: true }]);
        });

        // Update allPagesLoaded prop to true to simulate stopping fetch
        await act(async () => {
            render(
                <Masonry
                    recipes={mockRecipes}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={true}
                    status="succeeded"
                    error={null}
                />
            );
        });

        expect(mockFetchRecipesData).toHaveBeenCalledTimes(1);
    });

    it('renders correctly with an empty list of recipes', async () => {
        await act(async () => {
            render(
                <Masonry
                    recipes={[]}
                    fetchRecipesData={mockFetchRecipesData}
                    allPagesLoaded={true}
                    status="succeeded"
                    error={null}
                />
            );
        });
        expect(screen.queryByText(/Recipe \d/)).not.toBeInTheDocument();
    });
});
