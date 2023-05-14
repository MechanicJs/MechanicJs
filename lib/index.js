/**
 * sum a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
	return a + b;
}

/**
 * square root
 * @param {number} x
 * @returns {number || string}
 */
function sqrt(x) {
	const abs = x > 0;
	if (abs) return Math.sqrt(x);
	else return Math.sqrt(-x) + 'i';
}

/**
 * get average of array
 * @param {number[]} x
 * @returns {number}
 */
function average(x) {
	const len = x.length;
	if (typeof x !== 'object' || len === 0) {
		return 0;
	} else {
		let accumulator = 0;
		for (let i = 0; i < len; i++) {
			const currentValue = x[i];
			if (typeof currentValue !== 'number') return (accumulator = 0);
			else accumulator += currentValue;
		}
		return accumulator / len;
	}
}

module.exports = { sqrt, average };
