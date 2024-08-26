// Converted from app/scripts/todo/filters/todo.js

/**
 * Filters an array of todo items based on the given criteria.
 * 
 * @param array - The array of todo items to filter.
 * @param criteria - The criteria to filter the todo items by. Can be 'all', 'active', or 'completed'.
 * @returns A new array containing the filtered todo items.
 */
export function TodoFilter(array: { completed: boolean }[], criteria: string): { completed: boolean }[] {
    const filteredArray: { completed: boolean }[] = [];
    array.forEach(item => {
        if (criteria === 'all') {
            filteredArray.push(item);
        } else if (criteria === 'active' && item.completed === false) {
            filteredArray.push(item);
        } else if (criteria === 'completed' && item.completed === true) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
}
