import GroceryList from '../components/GroceryList/GroceryList';

const showGroceryList = (activeMenuItem, isLoggedIn) => {
    let isGroceryListVisible = false;
    let loginMessage = '';

    if (activeMenuItem == 'Grocery list') {
        if (isLoggedIn) {
            isGroceryListVisible = true;
            loginMessage = '';
        } else {
            isGroceryListVisible = false;
            loginMessage = <p>Please log in to access the content</p>;
        }
    }

    const groceryListContent = isGroceryListVisible ? (
        <GroceryList />
    ) : (
        loginMessage
    );

    return groceryListContent;
};

export default showGroceryList;
