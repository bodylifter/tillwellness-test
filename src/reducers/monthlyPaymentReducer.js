import monthlyPaymentActionTypes from '../actions/monthlyPaymentActionTypes';


export default function (state = 0, action) {
    switch (action.type) {
        case monthlyPaymentActionTypes.SET_PAYMENT:
            return action.payload;

        default:
			return state;
    }
}
