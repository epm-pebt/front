import PropTypes from 'prop-types';
import MUIButton from '@mui/material/Button';
import styles from './button.module.scss';
import classNames from 'classnames';

const Button = ({ variant, disabled, children, className }) => {
    const classes = classNames(
        styles['button'],
        styles[variant],
        className
    )
    return (
        <MUIButton
            disableElevation
            disableRipple
            disabled={disabled}
            variant={variant}
            className={classes}
        >
            {children}
        </MUIButton>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.string,
    className: PropTypes.string
};
export default Button;
