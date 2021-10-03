import AuthView from '../view/AuthView';
import AuthService from '../service/AuthService';
import Auth from '../model/Auth';
import NavbarView from '../view/NavbarView';
import { setToken } from '../config';
import User from '../model/User';

export default class AuthController {
  constructor() {
    AuthView.bindLogin(this.login);
    AuthView.bindLogout(this.logout.bind(this));
    AuthView.bindRegister(this.register);

    if (document.cookie) {
      const token = document.cookie.slice(4);
      const user = this._parseJwt(token);
      NavbarView.renderLoggedNavbar(user.sub);
      setToken(token);
    }
  }

  async login(username, password, rememberMe) {
    try {
      const auth = new Auth(username, password);
      await AuthService.login(auth, rememberMe);
      AuthView.closeModal();
      NavbarView.renderLoggedNavbar(auth.username);
    } catch (err) {
      AuthView.renderError(err.message, 'login');
    }
  }

  logout() {
    setToken('');
    AuthView.closeModal();
    AuthView.clearModal('login');
    NavbarView.renderNavbar();
    this._removeCookie();
  }

  async register(username, email, password) {
    try {
      const newUser = new User(username, email, password);
      console.log(newUser);
      await AuthService.register(newUser);
      AuthView.clearModal('register');
      AuthView.renderUserRegistered(username);
    } catch (err) {
      AuthView.renderError(err.message, 'register');
    }
  }

  _removeCookie() {
    document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  _parseJwt(token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}
