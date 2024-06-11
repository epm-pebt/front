import { createServer, Model, Factory, Response } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export function makeServer({ environment }) {
    let server = createServer({
        environment,
        models: {
            user: Model,
            recipe: Model,
        },

        factories: {
            recipe: Factory.extend({
                id() {
                    return uuidv4();
                },
                name(i) {
                    return `Recipe ${i + 1}`;
                },
                cooking_time() {
                    return Math.floor(Math.random() * 120) + 10;
                },
                diet_category() {
                    const categories = [
                        'Vegetarian',
                        'Vegan',
                        'Gluten-Free',
                        'Low-Carb/Keto',
                    ];
                    return categories[
                        Math.floor(Math.random() * categories.length)
                    ];
                },
                dish_category() {
                    const categories = [
                        'Side Dishes',
                        'Desserts',
                        'Snacks',
                        'Breakfast',
                        'Lunch',
                        'Dinner/Supper',
                    ];
                    return categories[
                        Math.floor(Math.random() * categories.length)
                    ];
                },
                image() {
                    return 'https://via.placeholder.com/150';
                },
                ingredients() {
                    return [
                        {
                            ingredient: 'Ingredient 1',
                            quantity: {
                                amount: 1,
                                unit: 'cup',
                            },
                        },
                        {
                            ingredient: 'Ingredient 2',
                            quantity: {
                                amount: 2,
                                unit: 'tbsp',
                            },
                        },
                    ];
                },
                steps() {
                    return [
                        {
                            step: 1,
                            image: {
                                url: 'https://via.placeholder.com/150',
                                alt: 'Step 1',
                            },
                            description: ['Description for step 1'],
                        },
                        {
                            step: 2,
                            image: {
                                url: 'https://via.placeholder.com/150',
                                alt: 'Step 2',
                            },
                            description: ['Description for step 2'],
                        },
                    ];
                },
            }),
        },

        seeds(server) {
            server.create('user', {
                email: 'test@example.com',
                password: 'password123',
                name: 'Test User',
                avatar: '',
                favoriteRecipes: [],
                groceryList: [],
            });
            server.createList('recipe', 50); // Create 50 recipes for pagination
        },

        routes() {
            this.namespace = '/api/v1';

            // Authentication routes
            this.post('/login', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                let user = schema.users.findBy({ email: attrs.email });

                if (user && user.password === attrs.password) {
                    return {
                        user: {
                            email: user.email,
                            name: user.name,
                            avatar: user.avatar,
                        },
                        token: 'fake-jwt-token',
                    };
                } else {
                    return new Response(
                        401,
                        {},
                        { errors: ['Invalid email or password'] }
                    );
                }
            });

            this.post('/signup', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                if (!attrs.name || !attrs.email || !attrs.password) {
                    return new Response(
                        400,
                        {},
                        { errors: ['Name, email, and password are required'] }
                    );
                }

                let user = schema.users.create(attrs);

                return {
                    user: {
                        name: user.name,
                        email: user.email,
                    },
                    token: 'fake-jwt-token',
                };
            });

            this.post('/logout', () => {
                return new Response(200);
            });

            // Recipe routes
            this.get('/recipes', (schema, request) => {
                const page = parseInt(request.queryParams.page, 10) || 1;
                const perPage = 10;
                const search = request.queryParams.search || '';

                let recipes = schema.recipes.all().models;

                if (search) {
                    recipes = recipes.filter((recipe) =>
                        recipe.name.toLowerCase().includes(search.toLowerCase())
                    );
                }

                const total = recipes.length;
                const paginatedRecipes = recipes.slice(
                    (page - 1) * perPage,
                    page * perPage
                );
                const nextPage = page * perPage < total ? page + 1 : null;

                return new Response(
                    200,
                    {},
                    { recipes: paginatedRecipes, nextPage, total }
                );
            });

            this.get('/recipes/:id', (schema, request) => {
                let id = request.params.id;
                let recipe = schema.recipes.find(id);

                if (recipe) {
                    return recipe;
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['Recipe not found'] }
                    );
                }
            });

            this.post('/recipes', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                if (
                    !attrs.name ||
                    !attrs.cooking_time ||
                    !attrs.diet_category ||
                    !attrs.dish_category ||
                    !attrs.image ||
                    !attrs.ingredients ||
                    !attrs.steps
                ) {
                    return new Response(
                        400,
                        {},
                        { errors: ['All fields are required'] }
                    );
                }

                let recipe = schema.recipes.create(attrs);
                return new Response(201, {}, recipe);
            });

            this.put('/recipes/:id', (schema, request) => {
                let id = request.params.id;
                let attrs = JSON.parse(request.requestBody);
                let recipe = schema.recipes.find(id);

                if (!recipe) {
                    return new Response(
                        404,
                        {},
                        { errors: ['Recipe not found'] }
                    );
                }

                if (
                    !attrs.name ||
                    !attrs.cooking_time ||
                    !attrs.diet_category ||
                    !attrs.dish_category ||
                    !attrs.image ||
                    !attrs.ingredients ||
                    !attrs.steps
                ) {
                    return new Response(
                        400,
                        {},
                        { errors: ['All fields are required'] }
                    );
                }

                recipe.update(attrs);
                return recipe;
            });

            this.patch('/recipes/:id', (schema, request) => {
                let id = request.params.id;
                let attrs = JSON.parse(request.requestBody);
                let recipe = schema.recipes.find(id);

                if (!recipe) {
                    return new Response(
                        404,
                        {},
                        { errors: ['Recipe not found'] }
                    );
                }

                recipe.update(attrs);
                return recipe;
            });

            this.delete('/recipes/:id', (schema, request) => {
                let id = request.params.id;
                let recipe = schema.recipes.find(id);

                if (recipe) {
                    recipe.destroy();
                    return new Response(204);
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['Recipe not found'] }
                    );
                }
            });

            // User routes
            this.post('/user/avatar', (schema, request) => {
                let { avatar } = JSON.parse(request.requestBody);
                let user = schema.users.first();

                if (user) {
                    user.update({ avatar });
                    const response = new Response(201, {}, user);
                    return response;
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['User not found'] }
                    );
                }
            });

            this.post('/user/favorites', (schema, request) => {
                let { recipeId } = JSON.parse(request.requestBody);
                let user = schema.users.first();
                let recipe = schema.recipes.find(recipeId);

                if (user && recipe) {
                    user.update({
                        favoriteRecipes: [...user.favoriteRecipes, recipeId],
                    });
                    return user.favoriteRecipes;
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['User or recipe not found'] }
                    );
                }
            });

            this.delete('/user/favorites/:recipeId', (schema, request) => {
                let recipeId = request.params.recipeId;
                let user = schema.users.first();

                if (user && user.favoriteRecipes.includes(recipeId)) {
                    user.update({
                        favoriteRecipes: user.favoriteRecipes.filter(
                            (id) => id !== recipeId
                        ),
                    });
                    return user.favoriteRecipes;
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['User or recipe not found'] }
                    );
                }
            });

            this.get('/user/grocery-list', (schema) => {
                let user = schema.users.first();
                return user.groceryList;
            });

            this.post('/user/grocery-list', (schema, request) => {
                try {
                    let { recipeId, servings = 1 } = JSON.parse(
                        request.requestBody
                    );
                    let user = schema.users.first();
                    let recipe = schema.recipes.find(recipeId);

                    if (!user) {
                        console.error('User not found');
                        return new Response(
                            404,
                            {},
                            { errors: ['User not found'] }
                        );
                    }

                    if (!recipe) {
                        console.error('Recipe not found');
                        return new Response(
                            404,
                            {},
                            { errors: ['Recipe not found'] }
                        );
                    }

                    if (!user.groceryList) {
                        user.update({ groceryList: [] });
                    }

                    user.update({
                        groceryList: [
                            ...user.groceryList,
                            {
                                recipeId,
                                servings,
                                ingredients: recipe.ingredients.map(
                                    (ingredient) => ({
                                        ...ingredient,
                                        checked: false,
                                    })
                                ),
                            },
                        ],
                    });
                    return new Response(201, {}, user.groceryList);
                } catch (error) {
                    console.error('Error processing request:', error);
                    return new Response(
                        500,
                        {},
                        { errors: ['Internal Server Error'] }
                    );
                }
            });

            this.put('/user/grocery-list/:recipeId', (schema, request) => {
                let recipeId = request.params.recipeId;
                let { servings } = JSON.parse(request.requestBody);
                let user = schema.users.first();
                let groceryItem = user.groceryList.find(
                    (item) => item.recipeId === recipeId
                );

                if (groceryItem) {
                    groceryItem.servings = servings;
                    user.save();
                    return groceryItem;
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['Grocery item not found'] }
                    );
                }
            });

            this.patch(
                '/user/grocery-list/:recipeId/ingredient',
                (schema, request) => {
                    let recipeId = request.params.recipeId;
                    let { ingredientName, checked } = JSON.parse(
                        request.requestBody
                    );
                    let user = schema.users.first();
                    let groceryItem = user.groceryList.find(
                        (item) => item.recipeId === recipeId
                    );

                    if (groceryItem) {
                        let ingredient = groceryItem.ingredients.find(
                            (ingredient) =>
                                ingredient.ingredient === ingredientName
                        );
                        if (ingredient) {
                            ingredient.checked = checked;
                            user.save();
                            return ingredient;
                        }
                    }
                    return new Response(
                        404,
                        {},
                        { errors: ['Ingredient not found'] }
                    );
                }
            );

            this.delete('/user/grocery-list/:recipeId', (schema, request) => {
                let recipeId = request.params.recipeId;
                let user = schema.users.first();
                let groceryItem = user.groceryList.find(
                    (item) => item.recipeId === recipeId
                );

                if (groceryItem) {
                    user.update({
                        groceryList: user.groceryList.filter(
                            (item) => item.recipeId !== recipeId
                        ),
                    });
                    return new Response(204);
                } else {
                    return new Response(
                        404,
                        {},
                        { errors: ['Grocery item not found'] }
                    );
                }
            });

            this.get('/user/grocery-list/ingredients', (schema) => {
                let user = schema.users.first();
                let ingredientsMap = new Map();

                user.groceryList.forEach((groceryItem) => {
                    groceryItem.ingredients.forEach((ingredient) => {
                        let key = `${ingredient.ingredient}-${ingredient.quantity.unit}`;
                        if (!ingredientsMap.has(key)) {
                            ingredientsMap.set(key, {
                                ingredient: ingredient.ingredient,
                                amount: 0,
                                unit: ingredient.quantity.unit,
                                checked: true,
                            });
                        }

                        let ingredientData = ingredientsMap.get(key);
                        ingredientData.amount +=
                            ingredient.quantity.amount * groceryItem.servings;

                        if (!ingredient.checked) {
                            ingredientData.checked = false;
                        }
                    });
                });

                return Array.from(ingredientsMap.values());
            });
        },
    });

    return server;
}
