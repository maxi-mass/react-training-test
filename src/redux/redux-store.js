import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer.plugin({
        myPosts: (state, action) => {
            switch (action.type) {
                case 'ADD-POST' : 
                    return undefined;
                default:
                    return state;
            }
        },
        dialogs: (state, action) => {
            switch (action.type) {
                case 'ADD-MESSAGE' :
                    return undefined;
                default:
                    return state;
            }
        }
    })
});

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


window.__store__ = store;

export default store;