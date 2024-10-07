// src/components/profile/DisplayProfile.js

import { getUserInfo } from './Profile.js';

export function displayProfile() {
    const user = getUserInfo();
    const profileElement = document.getElementById('profile-page');

    // Remplir la section de profil avec les informations de l'utilisateur
    profileElement.innerHTML = `
        <div class="profile-container fade-in">
            <div class="profile-content">
                <h2>Bienvenue, ${user.name}</h2>
                <p>Email: ${user.email}</p>
                <button id="disconnect-profile-button">Se déconnecter</button>
                <button id="close-profile-button">Fermer</button>
            </div>
        </div>
    `;

    // Afficher la section de profil
    profileElement.classList.remove('hidden');

    // Ajouter un événement pour fermer le profil
    const closeButton = document.getElementById('close-profile-button');
    closeButton.addEventListener("click", () => {
        // Masquer la section de profil
        profileElement.classList.add('hidden');
    });
}
