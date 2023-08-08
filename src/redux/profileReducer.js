const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, text: "Hi, how are you?", likesCount: 7, dislikesCount: 1},
        {id: 2, text: "It`s my first post", likesCount: 3, dislikesCount: 0}
    ],
    newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
                likesCount: 0,
                dislikesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (currentText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: currentText
    }
}

export default profileReducer;