import PropTypes from 'prop-types';
import { DISH_CATEGORY_KEYS, DIET_CATEGORY_KEYS } from '../constants';

const typographyVariant = PropTypes.oneOf(['Paragraph/P12', 'Emphasis/E12']);

const recipeShape = {
    id: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.number,
    image: PropTypes.string,
    alt: PropTypes.string,
    diet: PropTypes.oneOf(DIET_CATEGORY_KEYS),
    dish: PropTypes.oneOf(DISH_CATEGORY_KEYS),
    isFavorite: PropTypes.bool,
    isVegan: PropTypes.bool,
};

const animationPropTypes = {
    onAnimation: PropTypes.bool.isRequired,
    activateAnimation: PropTypes.func.isRequired,
};

export default {
    pageTitle: {
        title: PropTypes.string.isRequired,
        onAnimation: PropTypes.bool.isRequired,
        hasNoRecipes: PropTypes.bool,
    },
    recipeTitle: {
        title: PropTypes.string.isRequired,
        isVegan: PropTypes.bool,
    },
    time: {
        minutes: PropTypes.number.isRequired,
        variant: typographyVariant,
    },
    recipeCookingTime: {
        typographyVariant: typographyVariant,
        time: PropTypes.number.isRequired,
        showClock: PropTypes.bool,
    },
    recipeCard: {
        recipe: PropTypes.shape(recipeShape).isRequired,
        isLoading: PropTypes.bool,
    },
    favoriteRecipeIconButton: {
        onClick: PropTypes.func,
        recipeName: PropTypes.string.isRequired,
        selected: PropTypes.bool,
    },
    recipesList: {
        recipes: PropTypes.array.isRequired,
        fetchRecipesData: PropTypes.func.isRequired,
        allPagesLoaded: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired,
        error: PropTypes.object,
    },
    counter: {
        total: PropTypes.number,
        isFiltered: PropTypes.bool,
        status: PropTypes.string,
    },
    searchTextInput: {
        searchTerm: PropTypes.string,
        handleSearchChange: PropTypes.func.isRequired,
        handleClearSearch: PropTypes.func.isRequired,
        errors: PropTypes.array.isRequired,
        ...animationPropTypes,
    },
    searchForm: {
        ...animationPropTypes,
        backToHome: PropTypes.func.isRequired,
        onSearch: PropTypes.func.isRequired,
        previousLocation: PropTypes.object.isRequired,
    },
    button: {
        variant: PropTypes.oneOf([
            'primary',
            'secondary',
            'tertiary',
            'tag',
            'tag-selected',
            'icon-only',
            'icon-with-notifications',
        ]),
        label: PropTypes.string,
    },
    lazyLoadImage: {
        src: PropTypes.string,
        alt: PropTypes.string,
        height: PropTypes.number,
    },
};
