import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App.jsx';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/400.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
