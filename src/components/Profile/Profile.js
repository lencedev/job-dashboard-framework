// src/components/profile/Profile.js
import { getState } from '../../core/store.js';

export function getUserInfo() {
    return getState().currentUser;
}
