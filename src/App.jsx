import { StyledEngineProvider } from '@mui/material';
import Home from './pages/Home';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Home />
        </StyledEngineProvider>
    );
}

export default App;
