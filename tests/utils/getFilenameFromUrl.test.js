import getFilenameFromUrl from '../../src/utils/getFilenameFromUrl';

describe('getFilenameFromUrl tests', () => {
    test('should return the correct filename', () => {
        const url = 'http://localhost/test-file-stub';
        const expectedFilename = 'test-file-stub';
        expect(getFilenameFromUrl(url)).toBe(expectedFilename);
    });

    test('should return empty string if url has no filename', () => {
        const url = 'http://localhost/';
        const expectedFilename = '';
        expect(getFilenameFromUrl(url)).toBe(expectedFilename);
    });

    test('should return filename without leading slash', () => {
        const url = 'http://localhost/double-slash';
        const expectedFilename = 'double-slash';
        expect(getFilenameFromUrl(url)).toBe(expectedFilename);
    });

    test('should handle complex filenames', () => {
        const url = 'http://localhost/sub-dir/my-file.png';
        const expectedFilename = 'sub-dir/my-file.png';
        expect(getFilenameFromUrl(url)).toBe(expectedFilename);
    });
});
