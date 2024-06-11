import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './slices/recipes';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});
