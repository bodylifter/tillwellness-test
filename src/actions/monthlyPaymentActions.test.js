import monthlyPaymentActions from './monthlyPaymentActions';
import monthlyPaymentActionTypes from './monthlyPaymentActionTypes'


describe('monthlyPaymentActions', () => {
	it('should return correct action', () => {
		monthlyPaymentActions.setPayment({ value: 420 })((action) => {
			expect(action).toEqual({
				type: monthlyPaymentActionTypes.SET_PAYMENT,
				payload: 420,
				meta: void(0),
			});
		});
	});
});
