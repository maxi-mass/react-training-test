import {addPost, deletePost, profileReducer} from "./profile-reducer";
import React from "react";

// 1. Data
let initialState = {
    posts : [
        {id: 1, message: "Hello, how are you?", likeCount: 1},
        {id: 3, message: "Hi, it's my firs post on this platform!!!", likeCount: 2},
        {id: 5, message: "some text 11", likeCount: 2},
        {id: 8, message: "some text 2", likeCount: 3},
        {id: 11, message: "some text 3", likeCount: 5},
    ]
};

it("new post should be added", () => {
    // 2. Action
    let action = addPost("New test post");
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(6);
});

it("new post message should be following text", () => {
    // 2. Action
    let action = addPost("New test post");
    let newState = profileReducer(initialState, action);

    expect(newState.posts[0].message).toBe("New test post");
});

it("delete post. After removing Length of messages should be decrement", () => {
    // 2. Action
    let action = deletePost(3);
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(4);
});

it("delete post. After removing Length of messages should't be decrement if id is incorrect", () => {
    // 2. Action
    let action = deletePost('aaaa');
    let newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(5);
});

it("post message not to be 'Hello'", () => {
    let action = addPost("New test post");
    profileReducer(initialState, action);
    expect(profileReducer).not.toBe("Hello");
});