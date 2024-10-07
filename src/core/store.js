// src/store.js

let state = {
    users: [],
    currentUser: null,
    jobs: [],
};
const listeners = [];

// Fonction pour obtenir l'état actuel
export function getState() {
    return state;
}
// Fonction pour mettre à jour l'état
export function setState(newState) {
    // Mettre à jour l'état en fusionnant avec le nouvel état
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
