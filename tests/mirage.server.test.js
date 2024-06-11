import { makeServer } from 'src/mirage.server';

let server;

beforeEach(() => {
    server = makeServer({ environment: 'test' });
});

afterEach(() => {
    server.shutdown();
});

describe('MirageJS Server Routes', () => {
    test('POST /login returns a user and token for valid credentials', async () => {
        server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        let response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@example.com',
                password: 'password123',
            }),
        });
        let json = await response.json();

        expect(response.status).toBe(201);
        expect(json.user.email).toBe('test@example.com');
        expect(json.token).toBeDefined();
    });

    test('POST /login returns 401 for invalid credentials', async () => {
        server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        let response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@example.com',
                password: 'wrongpassword',
            }),
        });

        expect(response.status).toBe(401);
    });

    test('POST /signup creates a new user', async () => {
        let response = await fetch('/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'new@example.com',
                password: 'password123',
                name: 'New User',
            }),
        });
        let json = await response.json();

        expect(response.status).toBe(201); // Ensure this matches the actual status code
        expect(json.user.email).toBe('new@example.com');
        expect(json.token).toBeDefined();
    });

    test('POST /signup returns 400 for missing fields', async () => {
        let response = await fetch('/api/v1/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'new@example.com' }),
        });

        expect(response.status).toBe(400);
    });

    test('GET /recipes returns a list of recipes', async () => {
        server.createList('recipe', 5);

        let response = await fetch('/api/v1/recipes');
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.recipes).toHaveLength(5);
    });

    test('GET /recipes/:id returns a recipe by id', async () => {
        let recipe = server.create('recipe');

        let response = await fetch(`/api/v1/recipes/${recipe.id}`);
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.recipe.id).toBe(recipe.id);
    });

    test('GET /recipes/:id returns 404 for non-existent recipe', async () => {
        let response = await fetch('/api/v1/recipes/non-existent-id');

        expect(response.status).toBe(404);
    });

    test('POST /recipes creates a new recipe', async () => {
        let newRecipe = {
            name: 'New Recipe',
            cooking_time: 45,
            diet_category: 'Vegetarian',
            dish_category: 'Lunch',
            image: 'https://via.placeholder.com/150',
            ingredients: [
                {
                    ingredient: 'Ingredient 1',
                    quantity: { amount: 1, unit: 'cup' },
                },
            ],
            steps: [{ step: 1, description: ['Step 1'] }],
        };

        let response = await fetch('/api/v1/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        });
        let json = await response.json();

        expect(response.status).toBe(201);
        expect(json.recipe.name).toBe(newRecipe.name);
    });

    test('PUT /recipes/:id updates a recipe', async () => {
        let recipe = server.create('recipe');

        let updatedRecipe = {
            name: 'Updated Recipe',
            cooking_time: 60,
            diet_category: 'Vegan',
            dish_category: 'Dinner/Supper',
            image: 'https://via.placeholder.com/150',
            ingredients: [
                {
                    ingredient: 'Ingredient 1',
                    quantity: { amount: 2, unit: 'tbsp' },
                },
            ],
            steps: [{ step: 1, description: ['Updated Step 1'] }],
        };

        let response = await fetch(`/api/v1/recipes/${recipe.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRecipe),
        });
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.recipe.name).toBe(updatedRecipe.name);
    });

    test('PATCH /recipes/:id partially updates a recipe', async () => {
        let recipe = server.create('recipe');

        let partialUpdate = {
            cooking_time: 90,
        };

        let response = await fetch(`/api/v1/recipes/${recipe.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(partialUpdate),
        });
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.recipe.cooking_time).toBe(partialUpdate.cooking_time);
    });

    test('DELETE /recipes/:id deletes a recipe', async () => {
        let recipe = server.create('recipe');

        let response = await fetch(`/api/v1/recipes/${recipe.id}`, {
            method: 'DELETE',
        });

        expect(response.status).toBe(204);
    });

    test('POST /user/avatar updates user avatar', async () => {
        server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        let response = await fetch('/api/v1/user/avatar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ avatar: 'new-avatar-url' }),
        });
        let json = await response.json();
        expect(response.status).toBe(201);
        expect(json.user.avatar).toBe('new-avatar-url');
    });

    test('POST /user/favorites adds a favorite recipe', async () => {
        let recipe = server.create('recipe');
        server.create('user', {
            email: 'test@example.com',
            password: 'password123',
            favoriteRecipes: [],
        });

        let response = await fetch('/api/v1/user/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipeId: recipe.id }),
        });
        let json = await response.json();

        expect(response.status).toBe(201);
        expect(json).toContain(recipe.id);
    });

    test('DELETE /user/favorites/:recipeId removes a favorite recipe', async () => {
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
            favoriteRecipes: [],
        });

        let recipe = server.create('recipe');

        user.update({ favoriteRecipes: [recipe.id] });

        let response = await fetch(`/api/v1/user/favorites/${recipe.id}`, {
            method: 'DELETE',
        });

        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json).not.toContain(recipe.id);
    });

    test('GET /user/grocery-list returns user grocery list', async () => {
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });
        user.update({
            groceryList: [
                {
                    recipeId: 'recipe1',
                    servings: 1,
                    ingredients: [
                        {
                            ingredient: 'Ingredient 1',
                            quantity: { amount: 1, unit: 'cup' },
                        },
                    ],
                },
            ],
        });

        let response = await fetch('/api/v1/user/grocery-list');
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json).toBeDefined();
    });

    test('POST /user/grocery-list adds a recipe to the grocery list', async () => {
        let recipe = server.create('recipe');
        server.create('user', {
            email: 'test@example.com',
            password: 'password123',
            groceryList: [], // Ensure groceryList is initialized
        });

        let response = await fetch('/api/v1/user/grocery-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipeId: recipe.id, servings: 2 }),
        });

        let json;
        try {
            json = await response.json();
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }

        expect(response.status).toBe(201);
        expect(json).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    recipeId: recipe.id,
                    servings: 2,
                }),
            ])
        );
    });

    test('PUT /user/grocery-list/:recipeId updates servings in grocery list', async () => {
        let recipe = server.create('recipe');
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        user.update({
            groceryList: [
                {
                    recipeId: recipe.id,
                    servings: 1,
                    ingredients: recipe.ingredients,
                },
            ],
        });

        let response = await fetch(`/api/v1/user/grocery-list/${recipe.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ servings: 3 }),
        });
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.servings).toBe(3);
    });

    test('PATCH /user/grocery-list/:recipeId/ingredient updates an ingredient in the grocery list', async () => {
        let recipe = server.create('recipe');
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        user.update({
            groceryList: [
                {
                    recipeId: recipe.id,
                    servings: 1,
                    ingredients: recipe.ingredients,
                },
            ],
        });

        let response = await fetch(
            `/api/v1/user/grocery-list/${recipe.id}/ingredient`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ingredientName: 'Ingredient 1',
                    checked: true,
                }),
            }
        );
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json.checked).toBe(true);
    });

    test('DELETE /user/grocery-list/:recipeId removes a recipe from the grocery list', async () => {
        let recipe = server.create('recipe');
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        user.update({
            groceryList: [
                {
                    recipeId: recipe.id,
                    servings: 1,
                    ingredients: recipe.ingredients,
                },
            ],
        });

        let response = await fetch(`/api/v1/user/grocery-list/${recipe.id}`, {
            method: 'DELETE',
        });

        expect(response.status).toBe(204);
    });

    test('GET /user/grocery-list/ingredients returns aggregated ingredients', async () => {
        let recipe1 = server.create('recipe', {
            ingredients: [
                {
                    ingredient: 'Ingredient A',
                    quantity: {
                        amount: 1,
                        unit: 'cup',
                    },
                },
            ],
        });
        let recipe2 = server.create('recipe', {
            ingredients: [
                {
                    ingredient: 'Ingredient A',
                    quantity: {
                        amount: 2,
                        unit: 'cup',
                    },
                },
            ],
        });
        let user = server.create('user', {
            email: 'test@example.com',
            password: 'password123',
        });

        user.update({
            groceryList: [
                {
                    recipeId: recipe1.id,
                    servings: 1,
                    ingredients: recipe1.ingredients,
                },
                {
                    recipeId: recipe2.id,
                    servings: 1,
                    ingredients: recipe2.ingredients,
                },
            ],
        });

        let response = await fetch('/api/v1/user/grocery-list/ingredients');
        let json = await response.json();

        expect(response.status).toBe(200);
        expect(json).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    ingredient: 'Ingredient A',
                    amount: 3,
                    unit: 'cup',
                }),
            ])
        );
    });
});
