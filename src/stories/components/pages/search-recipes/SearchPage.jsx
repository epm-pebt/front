import { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import PageTitle from '../../atomic/text-elements/PageTitle';
import SearchForm from '../../organisms/search-form/SearchForm';
import RecipesList from '../../organisms/recipes-list/RecipesList';
import ErrorBoundary from '../../ErrorBoundary';
import { SEARCH_PAGE_TITLE } from '../../../constants';
import { recipesListPropTypes } from '../../../prop-types/entities';

const SearchPage = ({ data }) => {
    const [recipes, setRecipes] = useState(data);
    return (
        <Container
            component="main"
            id="main"
            style={{
                backgroundColor: '#FFFFFF',
                paddingTop: '30px',
            }}
        >
            <Stack
                component="section"
                data-testid="section-search"
                style={{ textAlign: 'left' }}
                gap={2}
            >
                <ErrorBoundary>
                    <PageTitle title={SEARCH_PAGE_TITLE} />
                    <SearchForm recipes={data} setRecipes={setRecipes} />
                    <RecipesList recipes={recipes} />
                </ErrorBoundary>
            </Stack>
        </Container>
    );
};

SearchPage.propTypes = {
    data: recipesListPropTypes,
};

export default SearchPage;
