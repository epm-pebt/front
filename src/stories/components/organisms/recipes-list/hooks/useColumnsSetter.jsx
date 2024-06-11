import { useState, useMemo, useEffect } from 'react';
import { breakpointValues } from '../../../../../theme';

/**
 * This function distributes a list of items into a specified number of columns.
 * Each column is represented by an array, and all columns are returned as an array of arrays.
 * items are distributed based on their index in the array, columns are filled in a round-robin
 * order using the modulo operator.
 *
 * @param {any[]} items - The array of items to be distributed into columns.
 * @param {number} col - The number of columns to distribute the items into.
 *
 * @return {Array[]} Returns an array, where each item is an array representing a column,
 *                   and contains the items that were distributed to that column.
 *
 * @example
 * distributeItemsIntoColumns(['a', 'b', 'c', 'd', 'e'], 2);
 * // returns [[a,c,e], [b,d]]
 */
function distributeItemsIntoColumns(items, col) {
    // Initialize an array of arrays ('rows') based on the number of columns
    let rows = new Array(col).fill().map(() => []);

    // Distribute items across rows
    items.forEach((item, i) => {
        rows[i % col].push(item);
    });

    return rows;
}

const useColumnsSetter = (recipes, status) => {
    const [columns, setColumns] = useState(1);
    const skeletonItems = useMemo(() => new Array(10).fill({}), []);
    const [displayedItemsCount, setDisplayedItemsCount] = useState(0);
    let columnsArr = useMemo(() => {
        if (status === 'loading' && displayedItemsCount > 0) {
            const newSkeletonItemsCount = Math.max(
                0,
                recipes.length - displayedItemsCount
            );
            const newSkeletonItems = new Array(newSkeletonItemsCount).fill({});
            const combinedItems = [
                ...recipes.slice(0, displayedItemsCount),
                ...newSkeletonItems,
            ];
            return distributeItemsIntoColumns(combinedItems, columns);
        } else if (status === 'loading') {
            return distributeItemsIntoColumns(skeletonItems, columns);
        }
        return distributeItemsIntoColumns(recipes, columns);
    }, [status, recipes, columns, skeletonItems, displayedItemsCount]);

    // Sets the number of columns
    useEffect(() => {
        const updateColumns = () => {
            if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                const { xs } = breakpointValues;
                if (width > xs) {
                    setColumns(2);
                } else {
                    setColumns(1);
                }
            }
        };

        updateColumns();

        window.addEventListener('resize', updateColumns);

        return () => {
            window.removeEventListener('resize', updateColumns);
        };
    }, []);

    // Updates the count of recipe cards displayed
    useEffect(() => {
        if (status === 'succeeded') {
            setDisplayedItemsCount(recipes.length);
        }
    }, [recipes, status]);

    return columnsArr;
};

export default useColumnsSetter;
