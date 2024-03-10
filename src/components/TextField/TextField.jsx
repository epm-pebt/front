import React from 'react';
import { TextField as MUITextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

import './TextField.scss';

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
        base: true,
        error: error && !disabled ? true : false,
        disabled: disabled,
        focused: isFocused && !error,
    });

    return (
        <MUITextField
            className={`${textFieldClasses} ${'customTextfield'}`}
            placeholder={placeholder}
            label={isFocused ? placeholder : null}
            // color={''}
            error={error}
            disabled={disabled}
            helperText={disabled ? null : error ? helperText : null}
            {...rest}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            InputProps={{
                [adornment]: (
                    <InputAdornment position={position}>
                        {children}
                    </InputAdornment>
                ),
            }}
        />

    //     <TextField
    //     placeholder="Ex.: Veggie Burger"
    //     adornment="startAdornment"
    //     position="start"
    // >
    //     <SearchIcon />
    // </TextField>

    // <TextField
    //     placeholder="Error test"
    //     error
    //     adornment="endAdornment"
    //     position="end"
    //     helperText="Incorrect entry."
    // >
    //     <ErrorIcon />
    </TextField>

        // <MUITextField
        //     id="outlined-basic"
        //     // {isFocus ? []}
        //     label={label}
        //     // label={label || null}
        //     // placeholder={placeholder}
        //     placeholder={placeholder}
        //     variant="outlined"
        //     onFocus={onFocusHandler}
        //     onBlur={onBlurHandler}
        //     InputProps={{
        //         startAdornment: (
        //             // <InputAdornment style={{ marginTop: 0 }} position="start">
        //             <InputAdornment position="start">
        //                 <SearchIcon
        //                 // sx={{
        //                 //     width: 24,
        //                 //     height: 24,
        //                 // }}
        //                 />
        //             </InputAdornment>
        //         ),
        //     }}
        // />
    );

    // <MUITextField
    //     id="outlined-basic"
    //     // {isFocus ? []}
    //     label={label || null}
    //     // placeholder={placeholder}
    //     placeholder={isFocused ? null : placeholder}
    //     variant="outlined"
    //     onFocus={onFocusHandler}
    //     onBlur={onBlurHandler}
    //     InputProps={{
    //         startAdornment: (
    //             // <InputAdornment style={{ marginTop: 0 }} position="start">
    //             <InputAdornment position="start">
    //                 <SearchIcon
    //                 // sx={{
    //                 //     width: 24,
    //                 //     height: 24,
    //                 // }}
    //                 />
    //             </InputAdornment>
    //         ),
    //     }}
    // sx={{
    //     width: 327,
    //     color: '#6C6F80',
    //     minHeight: 48,

    //     '&.MuiInputBase-root': {
    //         borderRadius: '8px',
    //     },
    //     '& input': {
    //         padding: '0',
    //         paddingRight: '12px',
    //         paddingLeft: '8px',
    //         fontFamily: 'Open-sans',
    //         minHeight: '40px',
    //     },
    // }}
    // className="customTextField"
};

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    // label: PropTypes.string,
};

export default TextField;
