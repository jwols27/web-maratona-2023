import { ptBR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

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
                dark: '#E34079',
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
            fontWeightRegular: 500
        }
    },
    ptBR
);
