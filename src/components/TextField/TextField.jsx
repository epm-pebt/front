import { TextField as MUITextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import { useState } from 'react';
import textFieldStyles from './TextFieldStyles';

const TextField = (props) => {
    const {
        placeholder,
        error,
        position,
        children,
        adornment,
        disabled,
        helperText,
        label,
        type,
        className,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onFocusHandler = () => {
        setIsFocused(true);
    };
    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const helperTextData = disabled ? null : error ? helperText : null;
    const labelData = isFocused ? label : null;

    return (
        <MUITextField
            sx={{
                minWidth: 260,
                '& .MuiInputBase-input': {
                    padding: '12px 0',
                },
                ...textFieldStyles[type || 'default'],
            }}
            placeholder={placeholder}
            label={labelData}
            error={error}
            disabled={disabled}
            helperText={helperTextData}
            className={className}
            {...rest}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            InputProps={
                adornment
                    ? {
                          [adornment]: (
                              <InputAdornment position={position}>
                                  {children}
                              </InputAdornment>
                          ),
                      }
                    : null
            }
        />
    );
};

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node]),
    adornment: PropTypes.string,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    position: PropTypes.string,
    className: PropTypes.string,
};

export default TextField;
