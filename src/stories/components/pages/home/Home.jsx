import { useRef, useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TuneIcon from '@mui/icons-material/Tune';
import useAnimation from './hooks/useAnimations';
import useElementsSize from './hooks/useElementsSize';
import PageTitle from '../../atomic/text-elements/PageTitle';
import Counter from '../../atomic/text-elements/Counter';
import Button from '../../atomic/inputs/Button';
import SearchForm from '../../organisms/search-form/SearchForm';
import Masonry from '../../organisms/recipes-list/Masonry';
import {
    SEARCH_PAGE_TITLE,
    CONTAINER_MAX_WIDTH,
    BOTTOM_NAV_HEIGHT,
    PADDING,
    WHITE,
    FULL_WIDTH,
    NO_RECIPES_MSG,
    SURPRISE_RECIPE_BUTTON_LABEL,
} from '../../../constants';
import { useRecipes } from '../../../../hooks/useRecipes';
import { setSearchTerm } from '../../../../redux-toolkit/slices/recipes';
import { Typography } from '@mui/material';
import ErrorBoundary from '../../organisms/ErrorBoundary';

const Home = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.recipes.searchTerm);
    const [status, setStatus] = useState('idle');

    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const previousLocation = useRef(null);

    const {
        data,
        error,
        isLoading,
        isFetching,
        isError,
        fetchNextPage,
        hasNextPage,
    } = useRecipes(searchTerm);

    const { onAnimation, activateAnimation, backToHome } = useAnimation();
    const elementsSize = useElementsSize(headerRef, titleRef);

    const handleSearch = (term) => {
        dispatch(setSearchTerm(term));
    };

    const loadMoreRecipes = () => {
        if (hasNextPage) {
            return fetchNextPage();
        }
        return Promise.resolve();
    };

    const recipes = useMemo(
        () => data?.pages.flatMap((page) => page.recipes) || [],
        [data?.pages]
    );
    const total = useMemo(
        () => data?.pages.flatMap((page) => page?.total || 0)[0],
        [data?.pages]
    );

    const HeaderStack = useMemo(
        () =>
            styled(Stack)({
                position: 'fixed',
                padding: `0 ${PADDING * 1.5}rem ${PADDING}rem`,
                background: WHITE,
                zIndex: 10,
                width: FULL_WIDTH,
                maxWidth: `${CONTAINER_MAX_WIDTH}px`,
                margin: 'auto',
            }),
        []
    );

    const MasonryBox = useMemo(
        () =>
            styled(Box)({
                position: 'fixed',
                overflowY: 'scroll',
                top: `${elementsSize.headerHeight}px`,
                bottom: 0,
                width: FULL_WIDTH,
                maxWidth: `${CONTAINER_MAX_WIDTH}px`,
                paddingBottom: `${BOTTOM_NAV_HEIGHT + 16}px`,
                margin: 'auto',
                paddingLeft: `${PADDING}rem`,
                paddingRight: `${PADDING}rem`,
                zIndex: 0,
                scrollbarWidth: 'none' /* For Firefox */,
                '&::-webkit-scrollbar': {
                    display: 'none' /* For Chrome, Safari and Edge */,
                },
            }),
        [elementsSize.headerHeight]
    );

    const animationStyles = useMemo(
        () => ({
            transform: `${
                onAnimation
                    ? 'translateY(' +
                      -1 * (elementsSize.titleHeight + 16) +
                      'px)'
                    : 'translateY(0)'
            }`,
            transition: 'transform 300ms ease-out',
        }),
        [elementsSize.titleHeight, onAnimation]
    );

    useEffect(() => {
        if (isLoading) {
            setStatus('loading');
        } else if (isError) {
            setStatus('error');
        } else if (data) {
            setStatus('succeeded');
        }
    }, [isLoading, isError, data]);

    const hasNoRecipes = useMemo(
        () => status === 'succeeded' && !isFetching && recipes?.length === 0,
        [recipes, status, isFetching]
    );

    return (
        <Container
            sx={{
                width: FULL_WIDTH,
                maxWidth: `${CONTAINER_MAX_WIDTH}px`,
                margin: 'auto',
                padding: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ...animationStyles,
            }}
        >
            <ErrorBoundary>
                <HeaderStack
                    data-testid="search-header"
                    ref={headerRef}
                    component="header"
                    direction="column"
                >
                    <PageTitle
                        title={SEARCH_PAGE_TITLE}
                        onAnimation={onAnimation}
                        hasNoRecipes={hasNoRecipes}
                        ref={titleRef}
                    />
                    <SearchForm
                        activateAnimation={activateAnimation}
                        onAnimation={onAnimation}
                        backToHome={backToHome}
                        onSearch={handleSearch}
                        previousLocation={previousLocation}
                    />
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ mt: 4 }}
                    >
                        <Counter
                            total={total}
                            isFiltered={!!searchTerm}
                            status={status}
                        />
                        <Button
                            variant="icon-only"
                            aria-label="Filters"
                            onClick={() => {}}
                            endIcon={<TuneIcon />}
                        />
                    </Stack>
                </HeaderStack>
            </ErrorBoundary>
            <MasonryBox component="main">
                <ErrorBoundary>
                    {hasNoRecipes ? (
                        <Stack>
                            <Typography variant="h1" sx={{ mt: 2 }}>
                                {NO_RECIPES_MSG}
                            </Typography>
                            <Button
                                variant="primary"
                                label={SURPRISE_RECIPE_BUTTON_LABEL}
                                sx={{
                                    mt: 3,
                                    width: '100%',
                                }}
                            />
                        </Stack>
                    ) : (
                        <Masonry
                            data-testid="recipe-list"
                            recipes={recipes}
                            fetchRecipesData={loadMoreRecipes}
                            allPagesLoaded={!hasNextPage}
                            status={status}
                            error={error}
                            isLoading={isLoading}
                        />
                    )}
                </ErrorBoundary>
            </MasonryBox>
        </Container>
    );
};

export default Home;
