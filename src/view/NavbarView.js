class NavbarView {
  _parentElement = document.querySelector('.collapse');
  _loginButtonElement = document.querySelector('.btn-login');

  _logoutButtonElement = `
    <button type="button" class="btn btn-secondary btn-logout" data-bs-toggle="modal" data-bs-target="#logoutModal">
      Log out
    </button>
    `;

  renderLoggedNavbar(username) {
    this._parentElement.removeChild(this._loginButtonElement);
    this._parentElement.insertAdjacentHTML('beforeend', this._getUsernameTemplate(username));
    this._parentElement.insertAdjacentHTML('beforeend', this._logoutButtonElement);
  }

  _getUsernameTemplate(username) {
    return `
      <h4 class="nav-username mx-3 mb-0 text-secondary">${username}</h4>
    `;
  }

  renderNavbar() {
    this._parentElement.removeChild(document.querySelector('.btn-logout'));
    this._parentElement.removeChild(document.querySelector('.nav-username'));
    this._parentElement.append(this._loginButtonElement);
  }
}

export default new NavbarView();
