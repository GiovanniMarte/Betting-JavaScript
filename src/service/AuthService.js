/* eslint-disable no-useless-catch */
import { BASE_URL, setToken } from '../config';

class AuthService {
  async login(auth, rememberMe) {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auth),
      });

      const data = await res.json();

      if (res.status === 401 || res.status === 400) throw new Error(data.message);

      if (rememberMe) document.cookie = `jwt=${data.token}`;
      setToken(data.token);
    } catch (err) {
      throw err;
    }
  }

  async register(newUser) {
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.status === 409) throw new Error(data.message);
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
