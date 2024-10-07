// src/components/JobComponent.js

export function JobComponent(jobData) {
  const jobId = `job-${jobData.id}`; // Génère un id unique pour ce job

  // La fonction qui sera appelée lorsqu'on clique sur le job
  function handleClick() {
    alert(`More details about: ${jobData.title}`);
  }
  // Retournons le HTML
  return `
      <div id="${jobId}" class="job-item" style="cursor: pointer;">
        <h2>${jobData.title}</h2>
        <p>${jobData.shortDescription}</p>
      </div>
    `;
}

// Ajoute une fonction pour attacher le gestionnaire de clic après le rendu
export function attachJobClickHandler(jobData) {
  const jobId = `job-${jobData.id}`;
  document.getElementById(jobId).addEventListener('click', () => {
    alert(`More details about: ${jobData.title}`);
  });
}
