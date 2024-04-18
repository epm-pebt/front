import { createTheme } from '@mui/material/styles';

const ecoBitesUi = {
    typography: {
        'Emphasis/E14': {
            fontFamily: '"Open Sans", "sans-serif"',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'none',
        }
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
    components: {
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
                            backgroundColor: ecoBitesUi.palette.green.quaternary,
                            color: ecoBitesUi.palette.grey.tertiary,
                        }
                    }
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
                            backgroundColor: ecoBitesUi.palette.green.quaternary,
                            color: ecoBitesUi.palette.grey.tertiary,
                        }
                    }
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
                            backgroundColor: ecoBitesUi.palette.green.quaternary,
                        },
                        '&.Mui-disabled': {
                            backgroundColor: '#FFFFFF',
                            color: ecoBitesUi.palette.grey.tertiary,
                            border: `1px solid ${ecoBitesUi.palette.green.tertiary}`,
                        }
                    }
                },
            ],
        }
    }
});

export default theme;
