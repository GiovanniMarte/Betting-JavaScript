import { BASE_URL, token } from '../config';
import 'core-js/core';
import 'regenerator-runtime/runtime';

class MatchService {
  async getMatches() {
    const res = await fetch(`${BASE_URL}/matches`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const matches = await res.json();
    return matches;
  }
}

export default new MatchService();
