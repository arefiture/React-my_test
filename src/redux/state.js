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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("Please don't use me");
    },
    addPost() {
        let newPost = {
            id: 3,
            text: this._state.profilePage.newPostText,
            likesCount: 0,
            dislikesCount: 0
        };
        this._callSubscriber(this._state);
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
    },
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;