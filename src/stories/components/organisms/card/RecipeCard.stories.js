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

const recipeMock = {
    title: 'Vegan Lentils Soup',
    minutes: 45,
    imgUrl: defaultImage,
    alt: 'Awaiting image',
    isFavorite: false,
    isVegan: false,
};

export const DefaultCard = {
    args: { recipe: { ...recipeMock } },
};
export const VeganCard = {
    args: { recipe: { ...DefaultCard.args.recipe, isVegan: true } },
};
export const FavoriteCard = {
    args: { recipe: { ...DefaultCard.args.recipe, isFavorite: true } },
};
export const CardWithImage = {
    args: {
        recipe: {
            title: 'Veggie Risotto',
            minutes: 90,
            imgUrl: veggieRisotto,
            alt: 'Veggie Risotto',
            isFavorite: true,
            isVegan: true,
        },
    },
};
