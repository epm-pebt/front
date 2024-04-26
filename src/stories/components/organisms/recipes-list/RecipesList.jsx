import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import RecipeCard from '../card/RecipeCard';
import { recipesListPropTypes } from '../../../prop-types/entities';

const RecipesList = ({ recipes }) => {
    return (
        <Box>
            <Masonry
                data-testid="recipe-list"
                columns={{ xxs: 1, xs: 2, sm: 2 }}
                spacing={1}
                style={{
                    margin: 'auto',
                }}
            >
                {recipes.map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
            </Masonry>
        </Box>
    );
};

RecipesList.propTypes = recipesListPropTypes;

export default RecipesList;
