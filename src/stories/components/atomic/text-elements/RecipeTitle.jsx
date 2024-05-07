import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import styled from '@mui/system/styled';
import VeganIcon from '../../../assets/vegan.svg?react';

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

RecipeTitle.propTypes = {
    title: PropTypes.string.isRequired,
    isVegan: PropTypes.bool,
};

export default RecipeTitle;
