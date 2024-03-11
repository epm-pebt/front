import React from 'react';
import { TextField as MUITextField, StyledEngineProvider } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

import styles from './TextField.module.scss';

const TextField = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [isBlur, setBlur] = useState(true);

    const {
        placeholder,
        error,
        position,
        children,
        adornment,
        disabled,
        helperText,
        ...rest
    } = props;

    const onFocusHandler = () => setIsFocused(true);
    const onBlurHandler = () => setIsFocused(false);

    const textFieldClasses = classNames({
        [styles.base]: true,
        [styles['MuiInputBase-root']]: true,
        [styles.error]: error && !disabled ? true : false,
        [styles.disabled]: disabled,
        [styles.focused]: isFocused && !error,
    });

    return (
        <MUITextField
            className={textFieldClasses}
            // classes={{
            //     root: styles.base,
            //     focused: styles.focusedInput,
            // }}
            placeholder={placeholder}
            // label={isFocused ? placeholder : null}
            // color={''}
            error={error}
            disabled={disabled}
            helperText={disabled ? null : error ? helperText : null}
            {...rest}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            InputProps={{
                // className: styles['MuiFormControl-root'],
                [adornment]: (
                    <InputAdornment position={position}>
                        {children}
                    </InputAdornment>
                ),
            }}
        />
    );
};

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    // label: PropTypes.string,
};

export default TextField;
