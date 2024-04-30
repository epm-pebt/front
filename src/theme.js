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
            fontFamily: '"Merriweather", "sans-serif"',
            fontWeight: '400',
            fontSize: '1.125rem',
            lineHeight: '1.56rem',
            textAlign: 'left',
            textDecoration: 'none',
            textTransform: 'none',
        },
        'Emphasis/E12': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '600',
            fontSize: '0.75rem',
            lineHeight: '1.125rem',
            textAlign: 'left',
            textDecoration: 'none',
            textTransform: 'none',
        },
        'Emphasis/E14': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '600',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'none',
        },
        'Paragraph/P16': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            textAlign: 'left',
            textDecoration: 'none',
            textTransform: 'none',
        },
        'Paragraph/P12': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '400',
            fontSize: '0.75rem',
            lineHeight: '1.125rem',
            textAlign: 'left',
            textDecoration: 'none',
            textTransform: 'none',
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

const theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0, // New breakpoint key
            xs: 360, // New breakpoint value
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiBox: {
            variants: [
                {
                    props: { variant: 'heart' },
                    style: {
                        backgroundColor: '#FFFFFF',
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        zIndex: '1',
                        width: '2rem',
                        height: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                    },
                },
            ],
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
                    padding: '0px 0px 0px 0px',
                    '&: last-child': {
                        paddingBottom: '0.35em',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
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
