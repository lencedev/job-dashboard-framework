// src/components/AuthModal.js

import { SignUpForm } from './SignUpForm.js';
import { LoginForm } from './LoginForm.js';

let users = []; // Tableau pour stocker les utilisateurs
let currentUser = null; // Variable pour stocker l'utilisateur connecté

export function setupAuthModal() {
    const authButton = document.getElementById('auth-button');
    const authModal = document.getElementById('auth-modal');
    const closeModalButton = document.getElementById('close-modal-button');

    // Vérifier si un utilisateur est connecté dans `localStorage`
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser); // Récupérer l'utilisateur connecté
        updateAuthButtonToAccount(currentUser.name); // Mettre à jour le bouton de connexion
    }

    // Afficher la modal au clic sur le bouton de connexion
    authButton.addEventListener('click', () => {
        if (currentUser) {
            alert(`Bienvenue sur votre compte, ${currentUser.name}!`);
        } else {
            authModal.classList.add('show');
            authModal.classList.remove('hidden');
        }
    });

    closeModalButton.addEventListener('click', () => {
        authModal.classList.add('hidden');
        authModal.classList.remove('show');
    });

    renderLoginForm();

    // Fonction pour rendre le formulaire de connexion
    function renderLoginForm() {
        authModal.innerHTML = `
      <div class="modal-content">
        ${LoginForm()}
        <button id="close-modal-button">Fermer</button>
      </div>
    `;

        // Attacher les événements pour la soumission du formulaire de connexion
        document.getElementById('login-form').addEventListener('submit', handleLoginSubmit);

        // Attacher l'événement pour passer à la création de compte
        document.getElementById('create-account-link').addEventListener('click', (event) => {
            event.preventDefault();
            renderSignUpForm(); // Afficher le formulaire de création de compte
        });

        // Attacher l'événement pour fermer la modal
        document.getElementById('close-modal-button').addEventListener('click', () => {
            authModal.classList.add('hidden');
            authModal.classList.remove('show');
        });
    }

    function renderSignUpForm() {
        authModal.innerHTML = `
          <div class="modal-content">
            ${SignUpForm()}
            <button id="close-modal-button">Fermer</button>
          </div>
        `;
        // Attacher les événements pour la soumission du formulaire d'inscription
        document.getElementById('signup-form').addEventListener('submit', handleSignUpSubmit);

        // Attacher l'événement pour fermer la modal
        document.getElementById('close-modal-button').addEventListener('click', () => {
            authModal.classList.add('hidden');
            authModal.classList.remove('show');
        });
    }


    // Fonction de soumission du formulaire de connexion
    function handleLoginSubmit(event) {
        event.preventDefault();

        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        // Vérifier si les informations de connexion correspondent à un utilisateur enregistré
        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            currentUser = user; // Stocker l'utilisateur connecté
            updateAuthButtonToAccount(user.name); // Mettre à jour le bouton de connexion

            // Stocker les informations de l'utilisateur dans `localStorage`
            localStorage.setItem('currentUser', JSON.stringify(user));

            alert(`Bienvenue, ${user.name}! Vous êtes connecté.`);
            authModal.classList.add('hidden'); // Fermer la modal après une connexion réussie
            authModal.classList.remove('show');
        } else {
            alert('Email ou mot de passe incorrect.');
        }
    }

    // Fonction de soumission du formulaire d'inscription
    function handleSignUpSubmit(event) {
        event.preventDefault();

        const signupForm = document.getElementById('signup-form');
        const newUser = {
            name: signupForm.name.value,
            email: signupForm.email.value,
            password: signupForm.password.value,
        };

        // Ajouter l'utilisateur au tableau `users`
        users.push(newUser);
        currentUser = newUser; // Stocker l'utilisateur connecté

        // Stocker les informations de l'utilisateur dans `localStorage`
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        updateAuthButtonToAccount(newUser.name); // Mettre à jour le bouton de connexion

        signupForm.reset();
        authModal.classList.add('hidden');
        authModal.classList.remove('show');

        console.log('Liste des utilisateurs :', users);
    }

    // Fonction pour mettre à jour le bouton de connexion en "Compte"
    function updateAuthButtonToAccount(userName) {
        authButton.textContent = `Compte (${userName})`;
    }
}
