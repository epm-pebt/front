import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import SearchPage from './stories/components/pages/search-recipes/SearchPage';
import mockData from './stories/mocks/data';

function App() {
    const { recipeCardMockData } = mockData;
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <SearchPage
                    data={recipeCardMockData ? [...recipeCardMockData] : []}
                />
            </Container>
        </>
    );
}

export default App;
