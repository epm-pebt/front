/**
 * Extracts the filename (pathname) from a URL.
 *
 * @param {string} urlString - The URL string to extract the filename from.
 *
 * @returns {string} - Returns the filename (pathname) from the URL without the
 *                    leading '/'. If URL is invalid or does not contain a pathname,
 *                    it returns an empty string.
 */
export default function getFilenameFromUrl(urlString) {
    let url = new URL(urlString);
    return url.pathname.substring(1);
}
