import storeUtils from '../utils/store';

import accountActionTypes from './accountsActionTypes';

/**
 * Add account.
 *
 * @param {Object} options
 * @param {number} options.balance Account balance.
 */
function addAccount (options) {
	const {
		balance,
	} = options;

	if ( typeof balance !== 'number' || isNaN(balance) || balance < 0 ) {
		throw new Error('Argument balance should be positive number.');
	}

	return (dispatch) => dispatch(storeUtils.makeAction(accountActionTypes.ADD_ACCOUNT, {
		balance: options.balance,
	}));
}

export default {
	addAccount,
};
