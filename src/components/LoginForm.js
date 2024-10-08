// src/components/LoginForm.js

export function LoginForm() {
    return `
      <form id="login-form">
        <h2>Se connecter</h2>
        <div>
          <label for="login-email">Email:</label>
          <input type="email" id="login-email" required />
        </div>
        <div>
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" required />
        </div>
        <button type="submit">Connexion</button>
        <!-- Lien pour passer à la création de compte -->
        <p><a href="#" id="create-account-link">Créer un compte</a></p>
      </form>
    `;
  }