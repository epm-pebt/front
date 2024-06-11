import { fn } from '@storybook/test';
import Masonry from './Masonry';

const promiseFn = () => new Promise((resolve) => resolve());

export default {
    title: 'Components/Organisms/recipes-list/Masonry',
    component: Masonry,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fetchRecipesData: {
            description:
                'Loads more data and returns a promise. Called in the useInfiniteScrollingObserver hook.',
        },
        recipes: {
            description: 'Array of recipes.',
            control: {
                type: 'array',
            },
        },
        allPagesLoaded: {
            description: 'Boolean flag to prevent unnecessary fetching.',
        },
        status: {
            description: 'The various loading states received.',
            control: 'select',
            options: ['loading', 'error', 'succeeded'],
        },
    },
    args: {
        fetchRecipesData: fn(promiseFn),
    },
};

export const Default = {
    args: {
        recipes: Array.from({ length: 10 }, (_, index) => ({
            id: `${index + 1}`,
            title: `Recipe name ${index + 1}`,
            time: 30,
            image: undefined,
            alt: undefined,
            isVegan: false,
            isFavorite: false,
        })),
        allPagesLoaded: false,
        status: 'succeeded',
    },
};
