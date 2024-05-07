import { useState } from 'react';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import users from './mocks/users';
import showGroceryList from './utils/showGroceryList';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import SearchPage from './stories/components/pages/search-recipes/SearchPage';
import mockData from './stories/mocks/data';

function App() {
    const { recipeCardMockData } = mockData;
    const [activeMenuItem, setActiveMenuItem] = useState('Home');
    const user = users[2];
    const groceryListContent = showGroceryList(activeMenuItem, user.isLoggedIn);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <SearchPage
                    data={recipeCardMockData ? [...recipeCardMockData] : []}
                />
            </Container>
            <MenuNavigation
                setActiveMenuItem={setActiveMenuItem}
                activeMenuItem={activeMenuItem}
                user={user}
            />
        </>
    );
}

export default App;
