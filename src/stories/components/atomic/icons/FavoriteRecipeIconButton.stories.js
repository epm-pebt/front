import { fn } from '@storybook/test';
import FavoriteRecipeIconButton from './FavoriteRecipeIconButton';

export default {
    title: 'Components/Atomic/Icons/FavoriteRecipeIconButton',
    component: FavoriteRecipeIconButton,
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
        recipeName: {
            control: {
                type: 'text',
            },
        },
    },
};

export const ButtonDefault = {
    args: {
        selected: false,
        recipeName: 'Asparagus risotto',
        onClick: fn(),
    },
};
export const ButtonSelected = {
    args: {
        selected: true,
        recipeName: 'Asparagus risotto',
        onClick: fn(),
    },
};

export const Icon = {
    args: {
        selected: true,
        recipeName: 'Asparagus risotto',
    },
};
