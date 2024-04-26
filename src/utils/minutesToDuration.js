/**
 * Converts a duration (in minutes) to a string representation.
 *
 * @param {number} mins - The duration in minutes.
 * @returns {string} The duration in a string format with days, hours, and minutes.
 * Days are only included if the duration is 24 hours or longer. Hours are included
 * if the duration is 1 hour or longer. Minutes are always included.
 * The format of the output is 'Xd Yh Zm', where:
 * - X is the number of days
 * - Y is the number of hours
 * - Z is the number of minutes
 * E.g. A call with '1440' will return '1 day'. A call with '61' will return '1h 1m'.
 *
 * @example
 * // returns '45m'
 * minutesToDuration(45)
 *
 * @example
 * // returns '1h'
 * minutesToDuration(60)
 *
 * @example
 * // returns '1h 5m'
 * minutesToDuration(65)
 *
 * @example
 * // returns '1 day, 1h 30m'
 * minutesToDuration(1500)
 */
function minutesToDuration(mins) {
    const days = Math.floor(mins / (60 * 24));
    const hours = Math.floor((mins % (60 * 24)) / 60);
    const minutes = (mins % (60 * 24)) % 60;

    let duration = '';

    if (days > 0)
        duration += `${days} day${days !== 1 ? 's' : ''}${hours || minutes ? ',' : ''} `;
    if (hours > 0) duration += `${hours}h `;
    if (minutes > 0) duration += `${minutes}m`;

    return duration.trim();
}

export default minutesToDuration;
