import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RECIPES_PER_PAGE } from '../stories/constants';

const capitalize = (str) => {
    return str
        .split(' ')
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
};

const recipesDataMapper = (data) => {
    const isVegan = (str) => {
        const regex = /^vegan$/i;
        return regex.test(str);
    };
    const mappedRecipes = data.recipes.map((recipe) => ({
        id: recipe.id,
        title: capitalize(recipe.name),
        time: recipe.cooking_time,
        image: recipe.image,
        alt: recipe.image ? recipe.name : '',
        isVegan: isVegan(recipe.diet_category),
        isFavourite: false, // user must be logged in and have a favourite recipes data set to compare
    }));
    return mappedRecipes;
};

const fetchRecipes = async ({ pageParam = 1, queryKey }) => {
    const [, searchTerm] = queryKey;
    const nextPageQuery = `?page=${pageParam}`;
    const searchTermQuery = searchTerm ? `&search=${searchTerm}` : '';
    const { data } = await axios.get(
        `/api/v1/recipes${nextPageQuery}${searchTermQuery}`
    );
    return {
        ...data,
        recipes: recipesDataMapper(data),
        nextPage: data?.recipes?.length === 10 ? pageParam + 1 : undefined,
        currentPage: pageParam,
        itemsPerPage: RECIPES_PER_PAGE,
    };
};

const checkAllPagesFetched = (currentPage, itemsPerPage, totalItems) => {
    return currentPage * itemsPerPage >= totalItems;
};

export const useRecipes = (searchTerm) => {
    const result = useInfiniteQuery({
        queryKey: ['recipes', searchTerm],
        queryFn: fetchRecipes,
        getNextPageParam: (lastPage) => {
            const allPagesFetched = checkAllPagesFetched(
                lastPage.currentPage,
                lastPage.itemsPerPage,
                lastPage.total
            );
            return allPagesFetched ? undefined : lastPage.nextPage;
        },
    });
    return result;
};
