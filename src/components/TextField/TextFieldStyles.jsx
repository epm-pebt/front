const textFieldStyles = {
    default: {
        '& .MuiInputBase-root': {
            borderColor: '#6C6F80',
            borderRadius: 2,
            '&:focus': {
                borderColor: '#6C6F80',
            },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': {
                color: '#6C6F80',
            },
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #6C6F80',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6C6F80',
            },
            '&.Mui-focused': {
                outline: 'none',
            },
        },

        '& .MuiInputBase-input': {
            color: '#303240',
        },
    },

    standard: {
        '& .MuiInputBase-root': {
            borderColor: '#6C6F80',
            borderRadius: 2,
            '&:focus': {
                borderColor: '#6C6F80',
            },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': {
                color: '#468C00',
            },
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#468C00',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#468C00',
            },
            '&.Mui-focused': {
                outline: 'none',
            },
        },

        '& .MuiInputBase-input': {
            color: '#303240',
        },
    },

    error: {
        '& .MuiInputBase-root': {
            borderColor: '#F64F63;',
            borderRadius: 2,
            '&:focus': {
                borderColor: '#F64F63;',
            },
            '& .MuiSvgIcon-root': {
                color: '#F64F63',
            },
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': {
                color: '#F64F63;',
            },
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F64F63;',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#F64F63;',
            },
            '&.Mui-focused': {
                outline: 'none',
            },
        },

        '& .MuiInputBase-input': {
            color: '#303240',
        },

        '& .MuiFormHelperText-root': {
            color: '#F64F63',
        },
    },
};

export default textFieldStyles;
