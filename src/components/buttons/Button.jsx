import PropTypes from 'prop-types';
import MUIButton from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material';
import css from './button.module.scss';

const Button = ({ type, disabled, children }) => {
    let variant;
    let cssClass;
    switch (type) {
        case 'text':
            variant = 'text';
            cssClass = 'text';
            break;
        case 'small':
            variant = 'contained';
            cssClass = 'small-contained';
            break;
        case 'outlined':
            variant = 'outlined';
            cssClass = 'outlined';
            break;
        default:
            variant = 'contained';
            cssClass = 'contained';
    }
    return (
        <StyledEngineProvider injectFirst>
            <MUIButton
                disableElevation
                disabled={disabled}
                disableRipple
                variant={variant}
                className={`${css['base']} ${css[cssClass]}`}
            >
                {children}
            </MUIButton>
        </StyledEngineProvider>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};
export default Button;
