import store from '../store/store';
import * as actionTypes from '../actions/actionTypes';

export const dispatchGetUserName = (data) => {
    store.dispatch({
        type: actionTypes.LOGIN_USER_NAME,
        data
    });
};

export const dispatchGetUserLogo = (data) => {
    store.dispatch({
        type: actionTypes.LOGIN_USER_LOGO,
        data
    });
};

const initState = {
    isLogin: false,
    username: 'Peng',
    password: '18130278679',
};

export const getUserInfo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_NAME:
            console.log(action);
            return [
                ...state,
                {
                    isLogin: action.data.isLogin
                }
            ];
            break;
        case actionTypes.LOGIN_USER_LOGO:
            state.isLogin = true;
            return {...state};
            break;
        default:
            return state;
            break;
    }
};
