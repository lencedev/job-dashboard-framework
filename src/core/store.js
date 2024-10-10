// src/store.js

let state = {
    users: [],
    currentUser: null,
    jobs: [],
};
const listeners = [];

export function getState() {
    return state;
}
export function setState(newState) {
    state = { ...state, ...newState };
    listeners.forEach(listener => listener(state));
}

export function subscribe(listener) {
    listeners.push(listener);

    return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };
}
