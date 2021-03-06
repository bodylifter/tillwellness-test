import storeUtils from '../utils/storeUtils';

import monthlyPaymentActionTypes from './monthlyPaymentActionTypes';


/**
 * Sets payment value.
 *
 * @param {Object} options
 * @param {number} options.value Payment value.
 */
function setPayment (options) {
	return (dispatch) => dispatch(storeUtils.makeAction(monthlyPaymentActionTypes.SET_PAYMENT, options.value));
}

export default {
	setPayment,
};
