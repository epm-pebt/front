import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { makeServer } from './mirage.server.js';
import { store } from './redux-toolkit/store.js';
import theme from './theme';
import App from './App.jsx';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/400.css';
import ErrorBoundary from './stories/components/organisms/ErrorBoundary.jsx';

// Initialize MirageJS server if in development
if (import.meta.env.VITE_NODE_ENV === 'development') {
    console.info('Creating development Server');
    makeServer({ environment: 'development' });
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <ErrorBoundary>
                            <App />
                        </ErrorBoundary>
                    </QueryClientProvider>
                </Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
