import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const CHANGE_NEW_POST_TEXT = 'profile/CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';

let initialState = {
    posts : [
        {id: 1, message: "Hello, how are you?", likeCount: 1},
        {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
        {id: 5, message: "some text 11", likeCount: 2},
        {id: 8, message: "some text 2", likeCount: 3},
        {id: 11, message: "some text 3", likeCount: 5},
    ],
    userProfile: null,
    status: ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    {id: 5, message: action.postText, likeCount: 10},
                    ...state.posts
                ]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((el, i) => el.id !== action.postId)

            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const getUserProfile = userId => async dispatch => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
};

export const getProfileStatus = userId => async dispatch => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateProfileStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const addPost = postText => ({type: ADD_POST, postText});
export const deletePost = postId => ({type: DELETE_POST, postId});
export const setUserProfile = userProfile => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = status => ({type: SET_STATUS, status});