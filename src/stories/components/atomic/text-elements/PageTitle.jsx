import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export const PageTitle = ({ title }) => (
    <Typography variant="h1">{title}</Typography>
);

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PageTitle;
