import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Hi, how are you?", likesCount: 7, dislikesCount: 1},
                {id: 2, text: "It`s my first post", likesCount: 3, dislikesCount: 0}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Egor'},
                {id: 4, name: 'Viktor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are You?'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log("Please don't use me");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;