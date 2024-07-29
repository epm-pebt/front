import { createTheme } from '@mui/material/styles';

export const ecoBitesUi = {
    typography: {
        'Heading/H1': {
            fontFamily: '"Merriweather", "sans-serif"',
            fontWeight: '700',
            fontSize: '1.5rem',
            lineHeight: '2.125rem',
        },
        'Heading/H2': {
            fontFamily: 'Merriweather',
            fontWeight: '700',
            fontSize: '1.125rem',
            lineHeight: '1.56rem',
        },
        'Emphasis/E12': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '600',
            fontSize: '0.75rem',
            lineHeight: '1.125rem',
        },
        'Emphasis/E14': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '600',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            textAlign: 'center',
        },
        'Paragraph/P16': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        'Paragraph/P12': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '400',
            fontSize: '0.75rem',
            lineHeight: '1.125rem',
        },
    },
    palette: {
        green: {
            primary: '#468C00',
            secondary: '#87CC42',
            tertiary: '#B3E87D',
            quaternary: '#E2FBCC',
        },
        grey: {
            primary: '#303240',
            secondary: '#6C6F80',
            tertiary: '#C4C6CF',
            quaternary: '#F2F2F2',
        },
        pink: {
            primary: '#C954C4',
            secondary: '#DE7BD7',
            tertiary: '#F4B5F0',
            quaternary: '#FFF2FD',
        },
        red: {
            primary: '#F64F63',
        },
    },
};

export const breakpointValues = {
    xxs: 0, // New breakpoint key
    xs: 360, // New breakpoint value
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

const theme = createTheme({
    breakpoints: {
        values: {
            ...breakpointValues,
        },
    },
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: ecoBitesUi.palette.grey.primary,
                    '&.Mui-selected': {
                        color: ecoBitesUi.palette.pink.primary,
                        '.MuiSvgIcon-root': {
                            fill: ecoBitesUi.palette.pink.primary,
                        },
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    width: '100%',
                    maxWidth: breakpointValues.xs,
                    height: '100%',
                    maxHeight: '900px',
                    margin: 'auto',
                    padding: '16px 24px 60px 24px',
                },
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    zIndex: 10,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textAlign: 'left',
                    textDecoration: 'none',
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'h1' },
                    style: {
                        ...ecoBitesUi.typography['Heading/H1'],
                    },
                },
                {
                    props: { variant: 'h2' },
                    style: {
                        ...ecoBitesUi.typography['Heading/H2'],
                    },
                },
                {
                    props: { variant: 'Emphasis/E12' },
                    style: {
                        ...ecoBitesUi.typography['Emphasis/E12'],
                        textAlign: 'left',
                    },
                },
                {
                    props: { variant: 'Emphasis/E14' },
                    style: {
                        ...ecoBitesUi.typography['Emphasis/E14'],
                        textAlign: 'left',
                    },
                },
                {
                    props: { variant: 'Paragraph/P16' },
                    style: {
                        ...ecoBitesUi.typography['Paragraph/P16'],
                        color: ecoBitesUi.palette.grey.secondary,
                    },
                },
                {
                    props: { variant: 'Paragraph/P12' },
                    style: {
                        ...ecoBitesUi.typography['Paragraph/P12'],
                    },
                },
            ],
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    ...ecoBitesUi.typography['Emphasis/E14'],
                    textTransform: 'capitalize',
                },
            },
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        backgroundColor: ecoBitesUi.palette.green.tertiary,
                        border: 'none',
                        color: ecoBitesUi.palette.grey.primary,
                        padding: '10px 24px',
                        '&:hover': {
                            backgroundColor: ecoBitesUi.palette.green.tertiary,
                        },
                        '&:active': {
                            backgroundColor: ecoBitesUi.palette.green.secondary,
                        },
                        '&.Mui-disabled': {
                            backgroundColor:
                                ecoBitesUi.palette.green.quaternary,
                            color: ecoBitesUi.palette.grey.tertiary,
                        },
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        backgroundColor: ecoBitesUi.palette.green.quaternary,
                        border: 'none',
                        color: ecoBitesUi.palette.grey.primary,
                        padding: '10px 12px',
                        maxHeight: '32px',
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            minWidth: '40px',
                            height: '40px',
                            background: 'transparent',
                            borderRadius: 'inherit',
                            zIndex: 0,
                            pointerEvents: 'auto',
                        },
                        '&:hover': {
                            backgroundColor: ecoBitesUi.palette.green.tertiary,
                        },
                        '&:active': {
                            backgroundColor: ecoBitesUi.palette.green.secondary,
                        },
                        '&.Mui-disabled': {
                            backgroundColor:
                                ecoBitesUi.palette.green.quaternary,
                            color: ecoBitesUi.palette.grey.tertiary,
                        },
                    },
                },
                {
                    props: { variant: 'tertiary' },
                    style: {
                        backgroundColor: '#FFFFFF',
                        border: `1px solid ${ecoBitesUi.palette.green.secondary}`,
                        color: ecoBitesUi.palette.grey.primary,
                        padding: '10px 24px',
                        '&:hover': {
                            backgroundColor: '#FFFFFF',
                        },
                        '&:active': {
                            backgroundColor:
                                ecoBitesUi.palette.green.quaternary,
                        },
                        '&.Mui-disabled': {
                            backgroundColor: '#FFFFFF',
                            color: ecoBitesUi.palette.grey.tertiary,
                            border: `1px solid ${ecoBitesUi.palette.green.tertiary}`,
                        },
                    },
                },
                {
                    props: { variant: 'tag' },
                    style: {
                        backgroundColor: ecoBitesUi.palette.grey.quaternary,
                        border: 'none',
                        color: ecoBitesUi.palette.grey.secondary,
                        padding: '11px 16px',
                        '&:hover': {
                            backgroundColor: ecoBitesUi.palette.grey.quaternary,
                        },
                        '&:active': {
                            backgroundColor: ecoBitesUi.palette.grey.tertiary,
                        },
                        '&.Mui-disabled': {
                            display: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'tag-selected' },
                    style: {
                        backgroundColor: ecoBitesUi.palette.green.quaternary,
                        border: `1px solid ${ecoBitesUi.palette.green.tertiary}`,
                        color: ecoBitesUi.palette.green.primary,
                        padding: '11px 16px',
                        '&:hover': {
                            backgroundColor:
                                ecoBitesUi.palette.green.quaternary,
                        },
                        '&:active': {
                            backgroundColor: ecoBitesUi.palette.grey.tertiary,
                        },
                        '&.Mui-disabled': {
                            display: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'icon-only' },
                    style: {
                        background: 'transparent',
                        border: `none`,
                        color: 'inherit',
                        padding: '0',
                        paddingRight: '12px',
                        width: '24px',
                        minWidth: 'unset',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            minWidth: '40px',
                            height: '40px',
                            background: 'transparent',
                            borderRadius: 'inherit',
                            zIndex: 0,
                            pointerEvents: 'auto',
                        },
                        '&:hover': {
                            background: 'transparent',
                        },
                        '&:active': {
                            background: 'transparent',
                        },
                        '&.Mui-disabled': {
                            display: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'icon-with-notification' },
                    style: {
                        backgroundColor: '#FFFFFF',
                        border: `none`,
                        color: 'inherit',
                        padding: '0',
                        paddingRight: '12px',
                        width: '24px',
                        minWidth: 'unset',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            transform: 'translate(-50%, 50%)',
                            width: '10px',
                            height: '10px',
                            backgroundColor: ecoBitesUi.palette.pink.secondary,
                            borderRadius: '50%',
                            zIndex: 5,
                            pointerEvents: 'auto',
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            minWidth: '40px',
                            height: '40px',
                            background: 'transparent',
                            borderRadius: 'inherit',
                            zIndex: 0,
                            pointerEvents: 'auto',
                        },
                        '&:hover': {
                            backgroundColor: '#FFFFFF',
                        },
                        '&:active': {
                            backgroundColor: '#FFFFFF',
                        },
                        '&.Mui-disabled': {
                            display: 'none',
                        },
                    },
                },
            ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '8px 8px 12px 8px',
                    borderRadius: '16px',
                    position: 'relative',
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    width: '100%',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '0',
                    '&: last-child': {
                        paddingBottom: '0.35em',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        padding: '12.5px 0',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent',
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent',
                        },
                    },
                },
            },
        },
    },
});

export default theme;
