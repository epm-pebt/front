import { forwardRef } from 'react';
import { Typography } from '@mui/material';
import propTypes from '../../../prop-types/entities';

const PageTitle = forwardRef(
    ({ title, onAnimation, hasNoRecipes = false }, ref) => {
        return (
            <Typography
                variant="h1"
                component="h1"
                aria-hidden={hasNoRecipes}
                sx={{ marginTop: 2, opacity: !onAnimation ? 1 : 0 }}
                ref={ref}
            >
                {title}
            </Typography>
        );
    }
);

PageTitle.displayName = 'PageTitle';

PageTitle.propTypes = propTypes.pageTitle;

export default PageTitle;
