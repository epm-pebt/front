import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VeganIcon from '../../../assets/vegan.svg?react';
import propTypes from '../../../prop-types/entities';

const RecipeTitle = ({ title, isVegan }) => {
    const StyledTitleWrapper = styled('span')(({ theme }) => ({
        display: 'inline',
        marginRight: theme.spacing(1),
    }));

    return (
        <Typography variant="Emphasis/E14" component="h2" flexGrow={1}>
            <StyledTitleWrapper>{title}</StyledTitleWrapper>
            {isVegan ? <VeganIcon title={`${title} is a vegan dish.`} /> : null}
        </Typography>
    );
};

RecipeTitle.defaultProps = {
    isVegan: false,
};

RecipeTitle.propTypes = propTypes.recipeTitle;

export default RecipeTitle;
