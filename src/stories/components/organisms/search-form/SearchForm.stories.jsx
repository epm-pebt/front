import { action } from '@storybook/addon-actions';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import recipesReducer from '../../../../redux-toolkit/slices/recipes';

const mockStore = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});

export default {
    title: 'Components/organisms/search-form/SearchForm',
    component: SearchForm,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <Story />
                </MemoryRouter>
            </Provider>
        ),
    ],
};

export const Default = {
    args: {
        activateAnimation: action('activateAnimation'),
        onAnimation: false,
        onSearch: action('onSearch'),
        backToHome: action('backToHome'),
        previousLocation: { pathname: '/' },
    },
};
