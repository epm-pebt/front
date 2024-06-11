import { useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import propTypes from '../../../prop-types/entities';
import Button from '../../atomic/inputs/Button';
import SearchTextInput from '../../molecules/inputs/SearchTextInput';
import { useSearchHandlers } from './hooks/useSearchHandlers';

const SearchForm = ({
    activateAnimation,
    onAnimation,
    onSearch,
    backToHome,
    previousLocation,
}) => {
    const {
        errors,
        handleClearSearch,
        handleSearchChange,
        handleSubmit,
        inputValue,
    } = useSearchHandlers(onSearch, previousLocation);

    const backArrowRef = useRef(null);
    const containerRef = useRef(null);
    const searchInputRef = useRef(null);

    return (
        <Box
            component="form"
            data-testid="search-form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
                mt: onAnimation ? 4 : 2,
            }}
        >
            <Stack
                direction="row"
                sx={{
                    position: 'relative',
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                }}
                ref={containerRef}
            >
                <Slide
                    direction="right"
                    timeout={250}
                    easing="ease-in-out"
                    in={onAnimation}
                    mountOnEnter
                    unmountOnExit
                    container={containerRef.current}
                >
                    <Button
                        aria-label="Back to home page."
                        onClick={() => {
                            backToHome();
                            handleClearSearch();
                        }}
                        tabIndex={onAnimation ? 0 : -1}
                        variant="icon-only"
                        endIcon={<ArrowBackIcon />}
                        ref={backArrowRef}
                        sx={{
                            width: '40px',
                            height: '48px',
                        }}
                    />
                </Slide>
                <SearchTextInput
                    searchTerm={inputValue}
                    handleSearchChange={handleSearchChange}
                    handleClearSearch={handleClearSearch}
                    errors={Array.isArray(errors) ? errors : []}
                    activateAnimation={activateAnimation}
                    onAnimation={onAnimation}
                    ref={searchInputRef}
                />
            </Stack>
        </Box>
    );
};

SearchForm.propTypes = propTypes.searchForm;

export default SearchForm;
