import RecipeCard from './RecipeCard';
import defaultImage from '../../../assets/recipe-image-default.png';
import veggieRisotto from '../../../assets/veggie_risotto.jpg';

export default {
    title: 'Components/organisms/RecipeCard',
    component: RecipeCard,
    parameters: {
        layout: 'centered',
        visualViewport: 'largeMobile',
    },
    tags: ['autodocs'],
    argTypes: {
        imgUrl: {
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
};

export const DefaultCard = {
    args: {
        title: 'Vegan Lentils Soup',
        minutes: 45,
        imgUrl: defaultImage,
        alt: 'Awaiting image',
        isFavorite: false,
        isVegan: false,
    },
};
export const VeganCard = {
    args: {
        ...DefaultCard.args,
        isVegan: true,
    },
};
export const FavoriteCard = {
    args: {
        ...DefaultCard.args,
        isFavorite: true,
    },
};
export const CardWithImage = {
    args: {
        title: 'Veggie Risotto',
        minutes: 90,
        imgUrl: veggieRisotto,
        alt: 'Veggie Risotto',
        isFavorite: true,
        isVegan: true,
    },
};
