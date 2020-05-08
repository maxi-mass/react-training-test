const ADD_MESSAGE = 'messages/ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'messages/CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {name: "Maximas", id: 11},
        {name: "Dasha", id: 2},
        {name: "Ivan", id: 3},
        {name: "Alex", id: 4},
        {name: "Statyan", id: 5},
        {name: "Igoriyan", id: 6}
    ],
    messages: [
        {message: "Hello world", id: 1},
        {message: "Hey, how are you?", id: 2},
        {message: "Thanks, I'm fine!", id: 3},
        {message: "Why nobody loves me?", id: 4},
        {message: "Stasyan Yo", id: 5},
        {message: "Igoriyan Yo", id: 6}
    ],
    currentMessageId: 7
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageItem = {
                id: state.currentMessageId++,
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessageItem],
            };
        default:
            return state;
    }
};

export const addMessage = message => ({type: ADD_MESSAGE, message});