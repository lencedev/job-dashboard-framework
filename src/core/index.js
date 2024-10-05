// src/core/index.js

export function render(component, container) {
    container.innerHTML = component();
}
// Créer une fonction `addJob` pour ajouter un job à la liste
export function addJob(newJob, jobs, renderFunction, container) {
    // Ajouter le nouveau job à la liste existante
    jobs.push(newJob);

    // Re-render la liste mise à jour
    render(renderFunction, container);
}