import { ptBR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export const lightTheme = createTheme(
    {
        breakpoints: {
            values: {
                // default
                // xs: 0,
                // sm: 600,
                // md: 900,
                // lg: 1200,
                // xl: 1536
                xs: 0,
                sm: 600,
                md: 950,
                lg: 1200,
                xl: 1450,
                xxl: 1600
            }
        },
        palette: {
            primary: {
                main: '#563F91',
                light: '#8f5bb9',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#E34079',
                dark: '#CE1B60',
                contrastText: '#ffffff'
            },
            tertiary: {
                main: '#81CEEC',
                dark: '#2F4A75',
                contrastText: '#000'
            },
            error: {
                main: '#E52E4D'
            },
            info: {
                main: '#ffffff'
            },
            text: {
                primary: '#1A6AA3',
                secondary: '#ffffff'
            },
            action: {
                disabled: '#7ca7d3'
            }
        },
        typography: {
            fontFamily: 'Montserrat',
            fontWeightRegular: 500,
            h1: {
                fontSize: '6.000rem',
                [theme.breakpoints.down('lg')]: { fontSize: '5.000rem' },
                [theme.breakpoints.down('md')]: { fontSize: '3.750rem' },
                [theme.breakpoints.down('sm')]: { fontSize: '3.000rem' }
            },
            h2: {
                fontSize: '3.750rem',
                [theme.breakpoints.down('lg')]: { fontSize: '3.250rem' },
                [theme.breakpoints.down('md')]: { fontSize: '3.000rem' },
                [theme.breakpoints.down('sm')]: { fontSize: '2.125rem' }
            },
            h3: {
                fontSize: '3.000rem',
                [theme.breakpoints.down('lg')]: { fontSize: '2.500rem' },
                [theme.breakpoints.down('md')]: { fontSize: '2.125rem' },
                [theme.breakpoints.down('sm')]: { fontSize: '1.500rem' }
            },
            h4: {
                fontSize: '2.125rem',
                [theme.breakpoints.down('md')]: { fontSize: '1.500rem' },
                [theme.breakpoints.down('sm')]: { fontSize: '1.250rem' }
            },
            h5: {
                fontSize: '1.500rem',
                [theme.breakpoints.down('md')]: { fontSize: '1.250rem' }
            },
            h6: {
                fontSize: '1.250rem',
                [theme.breakpoints.down('md')]: { fontSize: '1.000rem' }
            },
            body1: {
                fontSize: '1.000rem',
                [theme.breakpoints.down('md')]: { fontSize: '0.875rem' }
            }
        }
    },
    ptBR
);
