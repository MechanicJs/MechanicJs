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
 * sum a and b
 * @param {number} x
 * @returns {number || string}
 */
function sqrt(x) {
	const abs = x > 0;
	if (abs) return Math.sqrt(x);
	else return Math.sqrt(-x) + 'i';
}

module.exports = sqrt;
