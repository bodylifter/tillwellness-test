import accountActionTypes from '../actions/accountsActionTypes';


export default function (state = [], action) {
    switch (action.type) {
        case accountActionTypes.ADD_ACCOUNT:
            return state.slice(0).concat(action.payload);

        default:
            return state;
    }
}
