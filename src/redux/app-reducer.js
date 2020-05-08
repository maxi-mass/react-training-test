import {loginUser} from "./auth-reducer";

const SET_INITIALIZED = "app/SET-INITIALIZED";

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state, initialized: true
            };
        default:
            return state;
    }
};

export const initialize = () => async dispatch => {
    let promise = dispatch(loginUser());
    await Promise.all([promise]);
    dispatch(setInitialized());
};

export const setInitialized = () => ({type: SET_INITIALIZED});