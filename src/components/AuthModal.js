// src/components/AuthModal.js

let users = []; // Stocker les utilisateurs localement pour le moment

// Fonction pour attacher les événements de la modal d'authentification
export function setupAuthModal() {
  const authButton = document.getElementById('auth-button');
  const authModal = document.getElementById('auth-modal');
  const closeModalButton = document.getElementById('close-modal-button');
  const signupForm = document.getElementById('signup-form');

  // Afficher la modal au clic sur le bouton de connexion
  authButton.addEventListener('click', () => {
    authModal.classList.add('show'); // Afficher la modal
    authModal.classList.remove('hidden'); // Retirer la classe qui cache la modal
  });

  // Cacher la modal au clic sur le bouton "Fermer"
  closeModalButton.addEventListener('click', () => {
    authModal.classList.add('hidden'); // Cacher la modal
    authModal.classList.remove('show'); // Retirer la classe qui affiche la modal
  });

  // Gérer la soumission du formulaire d'inscription
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Créer un nouvel utilisateur
    const newUser = { name, email, password };

    // Ajouter l'utilisateur à la liste des utilisateurs
    users.push(newUser);

    console.log('New User Created:', newUser);
    console.log('All Users:', users);

    // Réinitialiser le formulaire
    signupForm.reset();

    // Fermer la modal après l'inscription
    authModal.classList.add('hidden');
    authModal.classList.remove('show');
  });
}
