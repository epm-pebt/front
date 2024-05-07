import minutesToDuration from 'src/utils/minutesToDuration';

describe('minutesToDuration', () => {
    it('should return correct duration for only minutes', () => {
        expect(minutesToDuration(45)).toBe('45m');
    });

    it('should return correct duration for only hours', () => {
        expect(minutesToDuration(60)).toBe('1h');
    });

    it('should return correct duration for hours and minutes', () => {
        expect(minutesToDuration(65)).toBe('1h 5m');
    });

    it('should return correct duration for days, hours and minutes', () => {
        expect(minutesToDuration(1530)).toBe('1 day, 1h 30m');
    });

    it('should return correct duration when minutes are zero', () => {
        expect(minutesToDuration(1440)).toBe('1 day');
    });

    it('should return correct duration when hours, minutes are zero', () => {
        expect(minutesToDuration(0)).toBe('');
    });
});
