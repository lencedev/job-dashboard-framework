import { getUserInfo } from "./Profile.js";

export function displayProfile() {
    const user = getUserInfo();
    document.getElementById('app').innerHTML = `
    <div class="profile-container">
    <h2> Bienvenue, ${user.name}</h2>
    <p>Email: ${user.email}</p>
    </div>
    `;
}
