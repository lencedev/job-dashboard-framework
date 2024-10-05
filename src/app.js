import { render } from './core/index.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { JobList, attachJobListEvents } from './components/JobList/JobList.js';

// Exemples de données de jobs
const jobs = [
  { id: 1, title: 'Frontend Developer', shortDescription: 'Develop modern UI components' },
  { id: 2, title: 'Backend Developer', shortDescription: 'Build scalable APIs' },
  // D'autres jobs...
];

// Fonction pour rendre l'application
function App() {
  return `
    ${Header()}
    ${JobList(jobs)}
    ${Footer()}
  `;
}

// Rendre l'application principale
const appContainer = document.getElementById('app');
render(App, appContainer);

// Attacher les événements pour la JobList
attachJobListEvents(jobs);
