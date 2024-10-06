// src/components/profile/DisplayProfile.js

import { getUserInfo } from './Profile.js';

export function displayProfile() {
    const user = getUserInfo();
    const appElement = document.getElementById('app');

    // Sauvegarder le contenu initial de `appElement`
    const initialContent = appElement.innerHTML;

    // Afficher la page de profil
    appElement.innerHTML = `
        <div class="profile-container">
            <h2> Bienvenue, ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <button id="close-profile-button">Fermer</button>
        </div>
    `;

    // Ajouter un événement pour fermer le profil
    const closeButton = document.getElementById('close-profile-button');
    closeButton.addEventListener("click", () => {
        // Restaurer le contenu initial
        appElement.innerHTML = initialContent;
    });
}
