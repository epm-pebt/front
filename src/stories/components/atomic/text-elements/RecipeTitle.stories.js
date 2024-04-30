import RecipeTitle from './RecipeTitle';

export default {
    title: 'Components/Atomic/Text-Elements/RecipeTitle',
    component: RecipeTitle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        isVegan: {
            control: { type: 'boolean' },
        },
    },
};

export const Title = {
    args: {
        title: 'Chicken Curry',
        isVegan: false,
    },
};
export const TitleVegan = {
    args: {
        title: 'Vegan Lentil Soup',
        isVegan: true,
    },
};
