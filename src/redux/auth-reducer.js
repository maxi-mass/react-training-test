import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

export const loginUser = () => dispatch => {
    return authAPI.auth().then(response => {
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
        }
    });
};

export const login = loginData => async dispatch => {
    let response = await authAPI.login(loginData);
    if (response.resultCode === 0) {
        dispatch(loginUser());
    } else {
        dispatch(stopSubmit(
            "login", {
                _error: "Login or password is invalid"
            }
        ));
    }
};

export const logout = () => async dispatch => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export const setUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
};