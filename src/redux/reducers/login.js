import * as actionTypes from '../actions/actionTypes';

export const dispatchGetUserName = (data) => {
    return {
        type: actionTypes.LOGIN_USER_NAME,
        data
    }
};

export const dispatchGetUserLogo = () => {
    return {
        type: actionTypes.LOGIN_USER_LOGO
    }
};

const initState = {
    isLogin: false,
    username: 'Peng',
    password: '18130278679',
    img: 'peng.jpg'
};

export const getUserInfo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_NAME:
            state.isLogin = true;
            return {...state};
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
