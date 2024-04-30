import testTermOnString from './testTermOnString';

/**
 * Filters an array of recipes based on a term. It checks if the term matches any of
 * the 'title', 'diet', or 'dish' attributes of the recipe objects. It ignores case and
 * ensures each returned recipe is unique.
 *
 * @param {string} term - The term to search for within recipes. If term length is less than 2,
 *                         function will return initial recipes.
 * @param {Array.<Object>} recipes - The array of recipe objects to search within. Each object
 *                                   must contain 'title', 'diet', 'dish', and 'id' attributes.
 *
 * @returns {Array.<Object>} An array of recipe objects that match the term. If a match is found,
 *                           it returns unique matches. If no match is found and the term's
 *                           length is less than 2, it returns the original recipes array.
 *                           Otherwise, it returns an empty array.
 */
const formFilter = (term, recipes) => {
    // Ensure term is a string and recipes is an array of objects
    if (
        typeof term !== 'string' ||
        !Array.isArray(recipes) ||
        !recipes.every(
            (recipe) => typeof recipe === 'object' && recipe !== null
        )
    ) {
        return recipes;
    }

    let keys = ['title', 'diet', 'dish'];

    let matches = [];
    for (let key of keys) {
        const filteredRecipes = recipes.filter((recipe) => {
            return (
                Object.prototype.hasOwnProperty.call(recipe, key) &&
                testTermOnString(term, recipe[key])
            );
        });
        matches = [...matches, ...filteredRecipes];
    }
    // Create a map to remove duplicates based on 'id'
    let matchesMap = matches.reduce((map, recipe) => {
        map[recipe.id] = recipe;
        return map;
    }, {});

    // Extract unique recipes from the map
    let uniqueMatches = Object.values(matchesMap);

    if (uniqueMatches.length > 0) {
        return uniqueMatches;
    }

    return term.length >= 2 ? [] : recipes;
};

export default formFilter;
