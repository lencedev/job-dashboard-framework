// src/components/Header.js


export function Header() {
  return `
      <header class="app-header">
        <h1>Job Dashboard</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
                  <!-- Bouton pour ouvrir le formulaire de connexion / inscription -->
        <button id="auth-button">Se connecter / S'inscrire</button>
        </nav>
      </header>
    `;
}
