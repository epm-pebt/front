import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import formFilter from '../../../../utils/formFilter';
import SearchTextInput from '../../molecules/inputs/SearchTextInput';
import { searchFormPropTypes } from '../../../prop-types/entities';

const SearchForm = ({ recipes, setRecipes }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = useCallback(
        (event, currentRecipes) => {
            event.persist();
            const value = event.target.value;
            setSearchTerm(value);
            setRecipes(formFilter(value, currentRecipes));
        },
        [setSearchTerm, setRecipes]
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setRecipes(formFilter(searchTerm, recipes));
    };

    return (
        <Box
            component="form"
            data-testid="search-form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit} // submits on Enter key
        >
            <SearchTextInput
                searchTerm={searchTerm}
                handleSearchChange={(e) => handleSearchChange(e, recipes)}
            />
        </Box>
    );
};

SearchForm.propTypes = {
    ...searchFormPropTypes,
};

export default SearchForm;
