import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';

const Button = ({ label, ...rest }) => (
    <MuiButton {...rest} disableElevation disableFocusRipple disableRipple>
        {label}
    </MuiButton>
);

Button.defaultProps = {
    variant: 'primary',
};

Button.propTypes = {
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'tag',
        'tag-selected',
    ]),
    label: PropTypes.string.isRequired,
};

export default Button;
