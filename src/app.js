import { render } from './core/index.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { setupJobAddition } from './components/JobManager.js';
import { JobList, attachJobListEvents } from './components/JobList/JobList.js';
import { SignUpForm } from './components/SignUpForm.js';
import { setupAuthModal } from './components/AuthModal.js';

// Exemples de données de jobs
const jobs = [
    { id: 1, title: 'Frontend Developer', shortDescription: 'Develop modern UI components' },
    { id: 2, title: 'Backend Developer', shortDescription: 'Build scalable APIs' },
    // D'autres jobs...
];

const appContainer = document.getElementById('app');

// Fonction pour rendre l'application
function App() {
    return `
    ${Header()}
    <!-- Section de modal cachée pour le formulaire d'inscription -->
    <div id="auth-modal" class="modal hidden">
      <div class="modal-content">
        ${SignUpForm()}
        <button id="close-modal-button">Fermer</button>
      </div>
    </div>
    <div id="job-list-container">${JobList(jobs)}</div>
    ${Footer()}
  `;
}

// Rendre l'application principale
render(App, appContainer);

// Attacher les événements pour la JobList
attachJobListEvents(jobs);
setupJobAddition(jobs, appContainer);
setupAuthModal();
