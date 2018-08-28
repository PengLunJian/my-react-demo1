import * as actionTypes from '../actions/actionTypes';

export const getUserInfo = (state = [], action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_NAME:
            return {
                name: 'Peng'
            };
            break;
        case actionTypes.LOGIN_USER_LOGO:
            return {
                logo: '/peng.jpg'
            };
            break;
        default:
            return state;
            break;
    }
};
