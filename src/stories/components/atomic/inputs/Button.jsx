import { forwardRef } from 'react';
import MuiButton from '@mui/material/Button';
import propTypes from '../../../prop-types/entities';

const Button = forwardRef(function Button({ label, ...rest }, ref) {
    return (
        <MuiButton
            ref={ref}
            {...rest}
            disableElevation
            disableFocusRipple
            disableRipple
        >
            {label}
        </MuiButton>
    );
});

Button.defaultProps = {
    variant: 'primary',
    label: '',
};

Button.propTypes = propTypes.button;

export default Button;
