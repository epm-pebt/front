import RecipesList from './RecipesList';
import mockData from '../../../mocks/data';

export default {
    title: 'Components/organisms/RecipesList',
    component: RecipesList,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        recipes: [...mockData.recipeCardMockData],
    },
};
