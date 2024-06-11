import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { setSearchTerm } = recipesSlice.actions;
export default recipesSlice.reducer;
