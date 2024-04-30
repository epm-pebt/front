import FavoriteRecipeIcon from './FavoriteRecipeIcon';

export default {
    title: 'Components/Atomic/Icons/FavoriteRecipeIcon',
    component: FavoriteRecipeIcon,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        selected: {
            control: {
                type: 'boolean',
            },
        },
        title: {
            control: {
                type: 'text',
            },
        },
    },
};

export const Default = {
    args: {
        selected: false,
        title: 'Asparagus risotto',
    },
};

export const Selected = {
    args: {
        selected: true,
        title: 'Asparagus risotto',
    },
};
