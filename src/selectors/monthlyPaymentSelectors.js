/**
 * Returns monthly payment.
 * 
 * @param {AppStoreState} state
 */
const selectPayment = (state) => state.monthlyPayment;

export default {
	selectPayment,
};
