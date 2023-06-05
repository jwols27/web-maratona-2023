import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { lightTheme } from './shared/styles/LightTheme';
import { LoadingFallback } from './pages/Fallback/LoadingFallback';
import router from './router';
import './App.css';

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <RouterProvider
                router={router}
                fallbackElement={<LoadingFallback />}
            />
        </ThemeProvider>
    );
}

export default App;
