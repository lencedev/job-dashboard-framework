// src/components/JobList.js

import { JobComponent, attachJobClickHandler } from './JobComponent.js';

export function JobList(jobs) {
  // Génère le HTML de la liste des jobs
  const jobListHTML = jobs.map(job => JobComponent(job)).join('');
  // Retourne le HTML
  return `
    <section class="job-list">
      ${jobListHTML}
    </section>
  `;
}

export function attachJobListEvents(jobs) {
  // Ajouter les gestionnaires de clics pour chaque job
  jobs.forEach(job => attachJobClickHandler(job));
}

// Fonction pour ajouter un job et re-render la liste
export function addJobToList(newJob, jobs) {
  jobs.push(newJob);
  const jobListContainer = document.getElementById('job-list-container');
  jobListContainer.innerHTML = JobList(jobs);
  attachJobListEvents(jobs);
}
