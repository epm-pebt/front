export const DISH_CATEGORIES = [
    {
        Appetizers:
            'These are smaller dishes served before the main course. They are designed to whet the appetite before the main meal.',
    },
    {
        Soups: 'These can be either thick or clear and are often used as an appetizer or a main dish, particularly for lunch.',
    },
    {
        Salads: 'These are usually a mix of raw or cooked veggies, grains or pasta, topped with dressings or sauces. They can serve as appetizers, sides, or a main course.',
    },
    {
        'Main Course':
            'Also known as an entree, this is the primary dish in a meal and is usually the heaviest, heartiest, and most complex.',
    },
    {
        'Side Dishes':
            'These are served alongside the main course and are often used to complement the other flavors of the meal. Common side dishes include vegetables, grains and starches.',
    },
    {
        Desserts:
            'Sweet dishes that are eaten at the end of a meal. They can be anything from cakes, cookies, and pastries, to fruits, gelatins, and ice cream.',
    },
    {
        Beverages:
            'These are liquids intended to quench thirst, hydrate the body, or complement the flavors of the meal. They can be alcoholic or non-alcoholic.',
    },
    {
        Snacks: 'Small servings of food eaten between meals. They tend to be less complicated and quick to prepare/eat.',
    },
    {
        Breakfast:
            'The first meal of the day, normally lighter than a dinner, includes foods like eggs, cereals, bread products, fruit, and beverages like coffee or juice.',
    },
    {
        Brunch: 'A combination of breakfast and lunch that is usually eaten late in the morning to early afternoon.',
    },
    {
        Lunch: 'This is a meal that is served midday. It is usually lighter than dinner and often consists of a protein source, a grain, and vegetables.',
    },
    {
        'Dinner/Supper':
            'The last meal of the day, usually the main and largest meal, encompassing an entree, sides, and dessert.',
    },
];

export const DIET_CATEGORIES = [
    {
        Vegetarian:
            'A plant-based diet that omits meat, poultry, and seafood. Some vegetarians also avoid by-products of animal slaughter such as gelatin.',
    },
    {
        Vegan: 'Excludes all animal-derived ingredients including dairy, eggs, and honey.',
    },
    {
        Pescatarian:
            'A mostly vegetarian diet that also includes fish and seafood, but not necessarily other types of meat.',
    },
    {
        Flexitarian:
            'A largely vegetarian diet that occasionally includes meat or fish.',
    },
    {
        'Gluten-Free':
            'Excludes gluten, a mixture of proteins that can be found in wheat, barley, rye, and triticale.',
    },
    {
        'Lactose-Free':
            'Omits food and drink products that contain lactose, a type of sugar found in milk and dairy products.',
    },
    {
        'Low-Carb/Keto':
            'Restricts carbohydrate consumption and increase intake of high-protein and high-fat foods.',
    },
    {
        Paleo: 'Focuses on consuming whole, unprocessed foods that were likely available to our Paleolithic ancestors.',
    },
    {
        Mediterranean:
            'Primarily focuses on plant-based foods, healthy fats such as olive oil, as well as poultry, fish, and dairy in moderation.',
    },
    {
        'Raw Food Diet':
            'At least 75% of the food someone eats must be uncooked. Most people who follow a raw food diet are vegan.',
    },
    {
        'Intermittent Fasting':
            "Isn't a diet in the conventional sense but more accurately describes a pattern of eating. It splits the day or week into fasting and eating windows.",
    },
    {
        'Plant-Based':
            'Based on foods derived from plants, including vegetables, whole grains, nuts, seeds, legumes and fruits, but with few or no animal products.',
    },
];

export const DIET_CATEGORY_KEYS = DIET_CATEGORIES.map(
    (cat) => Object.keys(cat)[0]
);
export const DISH_CATEGORY_KEYS = DISH_CATEGORIES.map(
    (cat) => Object.keys(cat)[0]
);
export const VEGAN = 'vegan';
export const SEARCH_PREVIEW_TEXT = 'Ex.: Veggie Burger';
export const SEARCH_PAGE_TITLE = 'What are you cooking today?';
