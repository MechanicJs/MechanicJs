const { sqrt, average } = require('../lib/index.js');

test('square root test: sqrt(4) = 2', () => {
	expect(sqrt(4)).toBe(2);
});

test('square root test: sqrt(-4) = 2i', () => {
	expect(sqrt(-4)).toBe('2i');
});

test('average test: average([-1,-2,-3,4,5]) = 0.6', () => {
	expect(average([-1, -2, -3, 4, 5])).toBe(0.6);
});

test('average test: average([]) = 0', () => {
	expect(average([])).toBe(0);
});

test('average test: average([1,2,3,a]) = 0', () => {
	expect(average([1, 2, 3, 'a'])).toBe(0);
});
