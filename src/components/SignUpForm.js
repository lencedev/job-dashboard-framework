// src/components/SignUpForm.js

export function SignUpForm() {
  return `
    <form id="signup-form">
      <h2>Create an Account</h2>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  `;
}
