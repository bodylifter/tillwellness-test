import accountsActions from './accountsActions';
import accountsActionTypes from './accountsActionTypes'


describe('accountActions', () => {
	it('should return correct action', () => {
		accountsActions.addAccount({ balance: 420 })((action) => {
			expect(action).toEqual({
				type: accountsActionTypes.ADD_ACCOUNT,
				payload: {
					balance: 420,
				},
				meta: void(0),
			});
		});
	});

	it('should throw an error when NaN was passed', () => {
		expect(() => {
			accountsActions.addAccount({ balance: NaN })(() => {});
		}).toThrow();
	});

	it('should throw an error when a negative number was passed', () => {
		expect(() => {
			accountsActions.addAccount({ balance: -50 })(() => {});
		}).toThrow();
	});

	it('should throw an error when a not number type was passed', () => {
		expect(() => {
			accountsActions.addAccount({ balance: '55' })(() => {});
		}).toThrow();
	});
});
