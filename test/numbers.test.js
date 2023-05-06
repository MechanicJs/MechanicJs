const sqrt = require('../lib/index.js');

test('square root test: sqrt(4) = 2', () => {
	expect(sqrt(4)).toBe(2);
});

test('square root test: sqrt(-4) = 2i', () => {
	expect(sqrt(-4)).toBe('2i');
});
