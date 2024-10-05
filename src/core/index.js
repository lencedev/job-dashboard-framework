// src/core/index.js

export function render(component, container) {
    container.innerHTML = component();
}