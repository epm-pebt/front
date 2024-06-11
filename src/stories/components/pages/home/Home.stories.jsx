import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import recipesReducer from '../../../../redux-toolkit/slices/recipes';
import Home from './Home';

const mockStore = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});

const queryClient = new QueryClient();

export default {
    title: 'Components/pages/HomePage',
    component: Home,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <QueryClientProvider client={queryClient}>
                        <Story />
                    </QueryClientProvider>
                </MemoryRouter>
            </Provider>
        ),
    ],
};

export const Default = {};
