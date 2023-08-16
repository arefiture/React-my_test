import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore'
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};

renderEntireTree(store.getState());

/*
* Не забываем кидать render через callback, иначе мы не будем знать, какой render вызывать в state.js
* */
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
