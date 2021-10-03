class MatchesView {
  _parentElement = document.querySelector('.matches');

  _renderMatches(matches) {
    let template = '';
    matches.forEach(match => {
      template += `
        <div class="col-lg-4 col-md-6 mt-3 d-flex">
        <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#">Partido</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-success" href="#">Apuestas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fs-6">${match.teamHome} - ${match.teamAway}</h5>
              <h5 class="card-title text-success fw-bold">${match.goalsHome} : ${match.goalsAway}</h5>
              <p class="card-text">${new Date(match.date)}</p>
              <div class="d-grid col-6 mx-auto">
                    <button type="button" class="btn btn-success">Bet</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', template);
  }
}

export default new MatchesView();
