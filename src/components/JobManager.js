// src/components/JobManager.js
import { addJobToList } from './JobList/JobList.js';

export function setupJobAddition(jobs) {
  // Créer un bouton pour ajouter des jobs
  const addJobButton = document.createElement('button');
  addJobButton.textContent = 'Add Job';
  document.body.appendChild(addJobButton);
  addJobButton.addEventListener('click', () => {
    // Nouveau job à ajouter
    const newJob = { id: jobs.length + 1, title: 'New Job', shortDescription: 'A new job description' };
    // Ajouter le job à la liste via `addJobToList`
    addJobToList(newJob, jobs);
  });
}
