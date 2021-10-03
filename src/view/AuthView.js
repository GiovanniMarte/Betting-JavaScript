import { Modal } from 'bootstrap';

class AuthView {
  _modals = document.querySelectorAll('.modal');
  _loginForm = document.forms.login;
  _logoutForm = document.forms.logout;
  _registerForm = document.forms.register;
  _spinnerElement = document.querySelector('.spinner-border');

  _getUserRegisteredTemplate(username) {
    return `
    <div class="alert alert-success mx-3 mt-3 mb-0" role="alert">
      User '${username}' registered successfully.<br> Log in with your new account.
    </div>
  `;
  }

  _getErrorTemplate(err) {
    return `
    <div class="alert alert-danger mx-3 mt-3 mb-0" role="alert">
      ${err}
    </div>
  `;
  }

  bindLogin(handler) {
    this._loginForm.addEventListener('submit', () => {
      if (!this._loginForm.checkValidity()) return;

      const username = this._loginForm.elements.inputUsername.value;
      const password = this._loginForm.elements.inputPassword.value;
      const rememberMe = this._loginForm.elements.rememberCheck.checked;

      handler(username, password, rememberMe);
    });
  }

  bindLogout(handler) {
    this._logoutForm.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }

  bindRegister(handler) {
    this._registerForm.addEventListener('submit', () => {
      if (!this._registerForm.checkValidity()) return;

      const username = this._registerForm.elements.inputUsernameReg.value;
      const email = this._registerForm.elements.inputEmailReg.value;
      const password = this._registerForm.elements.inputPasswordReg.value;

      handler(username, email, password);
    });
  }

  renderError(err, modal) {
    const usedModal = modal === 'login' ? this._loginForm : this._registerForm;
    const alert = usedModal.querySelector('.alert');
    if (!alert) {
      usedModal.insertAdjacentHTML('afterbegin', this._getErrorTemplate(err));
      return;
    }
    alert.innerText = err;
  }

  renderUserRegistered(username) {
    if (this._registerForm.querySelector('.alert')) return;
    this._registerForm.insertAdjacentHTML('afterbegin', this._getUserRegisteredTemplate(username));
  }

  closeModal() {
    this._modals.forEach(modal => {
      let currentModal = Modal.getInstance(modal);
      if (currentModal) currentModal.hide();
    });
  }

  clearModal(modal) {
    const usedModal = modal === 'login' ? this._loginForm : this._registerForm;
    usedModal.classList.remove('was-validated');
    for (const element of usedModal.elements) {
      if (element.className !== 'form-control') continue;
      element.value = '';
    }
    const alert = usedModal.querySelector('.alert');
    if (!alert) return;
    usedModal.removeChild(alert);
  }
}

export default new AuthView();
