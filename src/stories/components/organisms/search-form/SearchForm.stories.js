import { fn } from '@storybook/test';
import SearchForm from './SearchForm';
import mockData from '../../../mocks/data';

export default {
    title: 'Components/organisms/SearchForm',
    component: SearchForm,
    tags: ['autodocs'],
    args: { setRecipes: fn() },
};

export const Default = {
    args: {
        recipes: [...mockData.recipeCardMockData],
    },
};
