// src/components/JobManager.js
import { addJobToList } from './JobList/JobList.js';

export function setupJobAddition(jobs) {
  const addJobButton = document.createElement('button');
  addJobButton.textContent = 'Add Job';
  document.body.appendChild(addJobButton);
  addJobButton.addEventListener('click', () => {
    const newJob = { id: jobs.length + 1, title: 'New Job', shortDescription: 'A new job description' };
    addJobToList(newJob, jobs);
  });
}
