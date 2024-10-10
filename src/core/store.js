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
    // Notifier tous les écouteurs des changements d'état
    listeners.forEach(listener => listener(state));
}

// Fonction pour écouter les changements d'état
export function subscribe(listener) {
    listeners.push(listener);

    // Retourner une fonction pour se désabonner
    return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };
}
