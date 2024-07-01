import { forwardRef } from 'react';
import { styled } from '@mui/material';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { ecoBitesUi } from '../../../../theme';
import { SEARCH_PREVIEW_TEXT } from '../../../constants';
import propTypes from '../../../prop-types/entities';
import Button from '../../atomic/inputs/Button';

const InputWrapper = styled(
    forwardRef(function InputWrapper(props, ref) {
        return <div ref={ref} {...props} />;
    })
)(() => ({
    position: 'relative',
    width: '100%',
}));

const SearchTextInput = forwardRef(function SearchTextInput(
    {
        activateAnimation,
        onAnimation,
        searchTerm,
        handleSearchChange,
        handleClearSearch,
        errors,
    },
    ref
) {
    return (
        <InputWrapper ref={ref}>
            <TextField
                id="search-input"
                variant="outlined"
                placeholder={onAnimation ? '' : SEARCH_PREVIEW_TEXT}
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{
                    backgroundColor: ecoBitesUi.palette.grey.quaternary,
                    borderRadius: '10px',
                    height: '48px',
                    width: '100%',
                }}
                InputProps={{
                    onFocus: activateAnimation,
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            sx={{
                                opacity: onAnimation ? 0 : 1,
                                width: onAnimation ? '12px' : '40px',
                                transition:
                                    'width 0.25s ease-in-out, opacity 0.25s ease-in',
                            }}
                        >
                            <Slide
                                direction="right"
                                timeout={250}
                                easing="ease-in-out"
                                in={!onAnimation}
                                mountOnEnter
                                unmountOnExit
                            >
                                <SearchIcon />
                            </Slide>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <>
                            {searchTerm?.length > 0 ? (
                                <InputAdornment position="end">
                                    <Button
                                        aria-label="Clear Search"
                                        onClick={handleClearSearch}
                                        variant="icon-only"
                                        sx={{
                                            background: 'transparent',
                                        }}
                                        endIcon={
                                            <CancelIcon aria-hidden="true" />
                                        }
                                    />
                                </InputAdornment>
                            ) : null}
                        </>
                    ),
                }}
                inputProps={{
                    'data-testid': 'search-input',
                }}
                error={errors?.length > 0}
            />
            {errors?.length > 0 &&
                console.info(
                    'Consider adding a validation error message to the user: ',
                    errors[0]?.errorMessage
                )}
        </InputWrapper>
    );
});

SearchTextInput.defaultProps = {
    searchTerm: '',
};

SearchTextInput.propTypes = propTypes.searchTextInput;

export default SearchTextInput;
