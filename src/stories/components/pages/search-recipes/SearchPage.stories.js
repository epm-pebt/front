import SearchPage from './SearchPage';
import mockData from '../../../mocks/data';

export default {
    title: 'Components/pages/SearchPage',
    component: SearchPage,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        data: [...mockData.recipeCardMockData],
    },
};
