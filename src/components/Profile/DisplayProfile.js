// src/components/profile/DisplayProfile.js

import { getUserInfo } from './Profile.js';

export function displayProfile() {
    const user = getUserInfo();
    const profileElement = document.getElementById('profile-page');

    // Afficher le contenu de la page de profil
    profileElement.innerHTML = `
        <div class="profile-container">
            <h2> Bienvenue, ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <button id="close-profile-button">Fermer</button>
        </div>
    `;

    // Afficher la "page" de profil
    profileElement.classList.remove('hidden');

    // Ajouter un événement pour fermer le profil
    const closeButton = document.getElementById('close-profile-button');
    closeButton.addEventListener("click", () => {
        // Masquer la "page" de profil
        profileElement.classList.add('hidden');
    });
}
