/**
 * Tests if a term exists within a string, using a case insensitive regex match.
 * If the term's length is less than 2,  the regex will fail.
 * If the term's length is 2 or more, it searches for the term as part of a word.
 *
 * @param {string} term - The term to search for within the string.
 * @param {string} str - The string to be searched.
 *
 * @returns {boolean} - Returns true if the term is found within the string,
 * otherwise false.
 */
const testTermOnString = (term, str) => {
    let regex = term.length >= 2 ? new RegExp(term, 'i') : new RegExp('(?!a)a');
    return regex.test(str);
};

export default testTermOnString;
