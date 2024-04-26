import PropTypes from 'prop-types';
import { DISH_CATEGORY_KEYS, DIET_CATEGORY_KEYS } from '../constants';

export const recipeCardPropTypes = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    imgUrl: PropTypes.string,
    alt: PropTypes.string,
    diet: PropTypes.oneOf(DIET_CATEGORY_KEYS),
    dish: PropTypes.oneOf(DISH_CATEGORY_KEYS),
    isFavorite: PropTypes.bool,
    isVegan: PropTypes.bool,
}).isRequired;

export const recipesListPropTypes =
    PropTypes.arrayOf(recipeCardPropTypes).isRequired;

export const searchFormPropTypes = {
    recipes: recipesListPropTypes,
    setRecipes: PropTypes.func,
};
