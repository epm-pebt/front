import formFilter from 'src/utils/formFilter'; // adjust the import path if needed

// Mock functions
jest.mock('src/utils/testTermOnString', () => jest.fn());
import testTermOnString from 'src/utils/testTermOnString';

// Common setup for mocks
beforeEach(() => {
    testTermOnString.mockClear();
});

describe('formFilter tests', () => {
    // Setup
    const recipes = [
        { id: '1', title: 'Pasta', diet: 'Vegetarian', dish: 'Italian' },
        { id: '2', title: 'Burger', diet: 'Non-Vegetarian', dish: 'American' },
        { id: '3', title: 'Fries', diet: 'Vegetarian', dish: 'French' },
    ];

    test('should return empty array for term longer than 2 characters with no matches', () => {
        testTermOnString.mockImplementation(() => false);
        expect(formFilter('term-with-no-matches', recipes)).toEqual([]);
    });

    test('should return all recipes for term less than 2 characters with no matches', () => {
        testTermOnString.mockImplementation(() => false);
        expect(formFilter('t', recipes)).toEqual(recipes);
    });

    test('should return matching recipes for matching term', () => {
        testTermOnString.mockImplementation((term, str) => str.includes(term));
        const expectedRecipes = [
            {
                id: '2',
                title: 'Burger',
                diet: 'Non-Vegetarian',
                dish: 'American',
            },
        ];
        expect(formFilter('Burger', recipes)).toEqual(expectedRecipes);
    });

    test('should handle duplicate matches', () => {
        testTermOnString.mockImplementation(() => true);
        expect(formFilter('a', recipes)).toEqual(recipes);
    });
});
