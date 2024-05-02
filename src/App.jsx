import { StyledEngineProvider } from '@mui/material';
import { useState } from 'react';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import users from './mocks/users';
import showGroceryList from './utils/showGroceryList';

function App() {
    const [activeMenuItem, setActiveMenuItem] = useState('Home');
    const user = users[4];
    const groceryListContent = showGroceryList(activeMenuItem, user.isLoggedIn);

    return (
        <StyledEngineProvider injectFirst>
            <div className="main-wrapper">
                {groceryListContent}
                <MenuNavigation
                    setActiveMenuItem={setActiveMenuItem}
                    activeMenuItem={activeMenuItem}
                    user={user}
                />
            </div>
        </StyledEngineProvider>
    );
}

export default App;
