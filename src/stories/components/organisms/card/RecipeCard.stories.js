import RecipeCard from './RecipeCard';
import veggieRisotto from '../../../assets/veggie_risotto.jpg';

export default {
    title: 'Components/organisms/card/RecipeCard',
    component: RecipeCard,
    parameters: {
        layout: 'centered',
        visualViewport: 'largeMobile',
    },
    tags: ['autodocs'],
    argTypes: {
        recipe: {
            image: {
                control: { type: 'text' },
            },
            alt: {
                control: { type: 'text' },
            },
            isFavorite: {
                control: { type: 'boolean' },
            },
            isVegan: {
                control: { type: 'boolean' },
            },
        },
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
    },
};

export const DefaultCard = {
    args: {
        recipe: {
            title: 'Vegan Lentils Soup',
            time: 45,
            image: undefined,
            alt: undefined,
            isFavorite: false,
            isVegan: false,
        },
        isLoading: false,
    },
};
export const VeganCard = {
    args: {
        recipe: { ...DefaultCard.args.recipe, isVegan: true },
        isLoading: false,
    },
};
export const FavoriteCard = {
    args: {
        recipe: { ...DefaultCard.args.recipe, isFavorite: true },
        isLoading: false,
    },
};
export const CardWithImage = {
    args: {
        recipe: {
            title: 'Veggie Risotto',
            time: 90,
            image: veggieRisotto,
            alt: 'Veggie Risotto',
            isFavorite: true,
            isVegan: true,
        },
        isLoading: false,
    },
};
