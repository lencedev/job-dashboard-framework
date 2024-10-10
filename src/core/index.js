// src/core/index.js

export function render(component, container) {
    container.innerHTML = component();
}
export function addJob(newJob, jobs, renderFunction, container) {
    jobs.push(newJob);
    render(renderFunction, container);
    radar(renderFunction, container);
    remove(renderFunction, container);
}