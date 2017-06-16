/**
 * Builds chart data.
 *
 * @param {Object} options
 */
function buildData (options) {
	const {
		initialBalance,
		monthlyPayment,
	} = options;

	const result = [];

	for (let i = 1, l = Math.ceil(initialBalance / monthlyPayment); i <= l ; i++ ) {
		let value = initialBalance - ( i > 1 ? monthlyPayment * i : 0 );
		if ( value < 0) {
			value = 0;
		}
		result.push({ name: i, value });
	}

	return result;
}

export default {
	buildData,
}
