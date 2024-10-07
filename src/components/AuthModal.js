// src/components/AuthModal.js

import { SignUpForm } from './SignUpForm.js';
import { LoginForm } from './LoginForm.js';
import { displayProfile } from './Profile/DisplayProfile.js';
import { getState, setState } from '../core/store.js'; // Importer le store

export function setupAuthModal() {
    const authButton = document.getElementById('auth-button');
    const authModal = document.getElementById('auth-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    // Vérifier si un utilisateur est connecté dans `localStorage`
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        setState({ currentUser: JSON.parse(storedUser) }); // Mettre à jour l'état global
        updateAuthButtonToAccount(getState().currentUser.name); // Mettre à jour le bouton de connexion
    }
    // Afficher la modal au clic sur le bouton de connexion
    authButton.addEventListener('click', () => {
        const currentUser = getState().currentUser;
        if (currentUser) {
            displayProfile();
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

        // Récupérer les utilisateurs du store
        const users = getState().users;
        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

        if (user) {
            setState({ currentUser: user }); // Mettre à jour l'utilisateur connecté dans le store
            localStorage.setItem('currentUser', JSON.stringify(user));
            updateAuthButtonToAccount(user.name);
            alert(`Bienvenue, ${user.name}! Vous êtes connecté.`);
            authModal.classList.add('hidden');
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

        // Ajouter l'utilisateur au tableau `users` du store
        const users = getState().users;
        setState({ users: [...users, newUser], currentUser: newUser });

        // Stocker les informations de l'utilisateur dans `localStorage`
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        updateAuthButtonToAccount(newUser.name);

        signupForm.reset();
        authModal.classList.add('hidden');
        authModal.classList.remove('show');

        console.log('Liste des utilisateurs :', getState().users);
    }

    // Fonction pour mettre à jour le bouton de connexion en "Compte"
    function updateAuthButtonToAccount(userName) {
        authButton.textContent = `Compte (${userName})`;
    }
}
