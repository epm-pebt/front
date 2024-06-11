import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigationMenu from './stories/components/organisms/nav-menu/BottomNavigationMenu';
import SwaggerDocs from './SwaggerDocs';
import { CONTAINER_MAX_WIDTH } from './stories/constants';
import ErrorBoundary from './stories/components/organisms/ErrorBoundary';

const LazyHome = lazy(() => import('./stories/components/pages/home/Home'));

const GroceriesList = () => <h1>Groceries</h1>;
const Profile = () => <h1>Profile</h1>;

const App = () => (
    <Router>
        <Routes>
            <Route
                path="/"
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyHome />
                        </Suspense>
                    </ErrorBoundary>
                }
            />
            <Route
                path="/groceries"
                element={
                    <ErrorBoundary>
                        <GroceriesList />
                    </ErrorBoundary>
                }
            />
            <Route
                path="/profile"
                element={
                    <ErrorBoundary>
                        <Profile />
                    </ErrorBoundary>
                }
            />
            <Route path="/docs" element={<SwaggerDocs />} />
        </Routes>
        <ErrorBoundary>
            <Box
                component="nav"
                style={{ maxWidth: `${CONTAINER_MAX_WIDTH}px` }}
            >
                <BottomNavigationMenu />
            </Box>
        </ErrorBoundary>
    </Router>
);

export default App;
