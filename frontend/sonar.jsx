import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    //TESTING
    window.getState = store.getState;

    ReactDOM.render(<h1>React is working {store={store}}</h1>, root)
})