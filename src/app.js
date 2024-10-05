// src/app.js

import { render } from './core/index.js';
import { JobComponent, attachJobClickHandler } from './components/JobComponent.js';

// Exemples de données de jobs
const jobs = [
  { id: 1, title: 'Frontend Developer', shortDescription: 'Develop modern UI components' },
  { id: 2, title: 'Backend Developer', shortDescription: 'Build scalable APIs' },

  // Ajoute d'autres jobs ici
];

// Fonction pour rendre la liste de jobs
function renderJobList(container) {
  container.innerHTML = jobs.map(job => JobComponent(job)).join('');

  // Ajouter les gestionnaires de clic après avoir rendu tous les composants
  jobs.forEach(job => attachJobClickHandler(job));
}

const appContainer = document.getElementById('app');
renderJobList(appContainer);
