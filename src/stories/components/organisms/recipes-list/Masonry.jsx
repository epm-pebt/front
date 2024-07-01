import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useEffect, useRef } from 'react';
import propTypes from '../../../prop-types/entities';
import RecipeCard from '../card/RecipeCard';
import useColumnsSetter from './hooks/useColumnsSetter';
import { useInfiniteScrollingObserver } from './hooks/useInfiniteScrollingObserver';

const MasonryColumn = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: '8px',
    width: '100%',
});

const MasonryContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
});

const Masonry = ({
    recipes,
    fetchRecipesData,
    allPagesLoaded,
    status,
    error,
}) => {
    const endOfListRef = useRef(null);
    const allPagesLoadedRef = useRef(allPagesLoaded);
    const columnsArr = useColumnsSetter(recipes, status);

    useEffect(() => {
        allPagesLoadedRef.current = allPagesLoaded;
    }, [allPagesLoaded]);

    useInfiniteScrollingObserver({
        endOfListRef,
        allPagesLoadedRef,
        status,
        fetchRecipesData,
    });

    return (
        <>
            {status === 'error' ? (
                <div>Error Fetching data: {JSON.stringify(error, null, 4)}</div>
            ) : (
                <Stack direction={'column'}>
                    <MasonryContainer>
                        {columnsArr.map((column, columnIndex) => (
                            <MasonryColumn key={`column-${columnIndex}`}>
                                {column.map((recipe, i) => (
                                    <RecipeCard
                                        key={recipe?.id || i}
                                        recipe={recipe}
                                        isLoading={status === 'loading'}
                                    />
                                ))}
                            </MasonryColumn>
                        ))}
                    </MasonryContainer>
                    {!allPagesLoaded && status === 'succeeded' ? (
                        <div
                            ref={endOfListRef}
                            data-testid="infinite-scroll-trigger"
                        />
                    ) : null}
                </Stack>
            )}
        </>
    );
};

Masonry.propTypes = propTypes.recipesList;

export default Masonry;
