import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from 'src/redux-toolkit/store';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'src/theme';
import Home from 'src/stories/components/pages/home/Home';
import { setSearchTerm } from 'src/redux-toolkit/slices/recipes';
import {
    SEARCH_PAGE_TITLE,
    NO_RECIPES_MSG,
    SURPRISE_RECIPE_BUTTON_LABEL,
} from 'src/stories/constants';
import ErrorBoundary from 'src/stories/components/organisms/ErrorBoundary';
import { makeServer } from 'src/mirage.server';

jest.mock('src/stories/components/pages/home/hooks/useAnimations', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        onAnimation: false,
        activateAnimation: jest.fn(),
        backToHome: jest.fn(),
    })),
}));

jest.mock('src/stories/components/pages/home/hooks/useElementsSize', () => ({
    __esModule: true,
    default: () => ({
        headerHeight: 50,
        titleHeight: 30,
    }),
}));

describe('Home Component', () => {
    let server;
    const queryClient = new QueryClient();

    beforeEach(() => {
        server = makeServer({ environment: 'test' });
    });

    afterEach(() => {
        queryClient.clear();
        server.shutdown();
        jest.clearAllMocks();
    });

    const renderWithProviders = (ui) => {
        return render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <MemoryRouter>
                                <ErrorBoundary>{ui}</ErrorBoundary>
                            </MemoryRouter>
                        </ThemeProvider>
                    </StyledEngineProvider>
                </QueryClientProvider>
            </Provider>
        );
    };

    it('should show recipes when data is available', async () => {
        server.createList('recipe', 2);

        renderWithProviders(<Home />);

        await waitFor(() => {
            expect(screen.getByText('Recipe 1')).toBeInTheDocument();
            expect(screen.getByText('Recipe 2')).toBeInTheDocument();
        });
    });

    it('should dispatch search term on search', async () => {
        const dispatchSpy = jest.spyOn(store, 'dispatch');

        renderWithProviders(<Home />);

        const searchInput =
            await screen.findByPlaceholderText(/Ex.: Veggie Burger/i);
        fireEvent.change(searchInput, { target: { value: 'test' } });

        fireEvent.submit(screen.getByTestId('search-form'));

        await waitFor(() => {
            expect(dispatchSpy).toHaveBeenCalledWith(setSearchTerm('test'));
        });

        dispatchSpy.mockRestore();
    });

    it('should render the search header and page title', () => {
        server.createList('recipe', 2);

        renderWithProviders(<Home />);

        expect(screen.getByTestId('search-header')).toBeInTheDocument();
        expect(screen.getByText(SEARCH_PAGE_TITLE)).toBeInTheDocument();
    });

    it('should show no recipes message', async () => {
        server.createList('recipe', 0);

        renderWithProviders(<Home />);

        await waitFor(() => {
            expect(screen.getByText(NO_RECIPES_MSG)).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(
                screen.getByText(SURPRISE_RECIPE_BUTTON_LABEL)
            ).toBeInTheDocument();
        });
    });
});
