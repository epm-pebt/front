import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '../../../assets/action-search.svg?react';
import { SEARCH_PREVIEW_TEXT } from '../../../constants';
import { ecoBitesUi } from '../../../../theme';

const SearchTextInput = ({ searchTerm, handleSearchChange }) => (
    <TextField
        id="search-input"
        variant="outlined"
        placeholder={SEARCH_PREVIEW_TEXT}
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
            width: '100%',
            backgroundColor: ecoBitesUi.palette.grey.quaternary,
        }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
            'aria-label': 'Search Recipe',
        }}
    />
);

SearchTextInput.defaultProps = {
    searchTerm: '',
};

SearchTextInput.propTypes = {
    searchTerm: PropTypes.string,
    handleSearchChange: PropTypes.func.isRequired,
};

export default SearchTextInput;
