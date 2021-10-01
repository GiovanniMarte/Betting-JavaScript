class MatchesView {
  _parentElement = document.querySelector('.matches');

  _renderMatches(matches) {
    let template = '';
    matches.forEach(match => {
      template += `
        <div class="col-4 mt-3">
        <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#">Partido</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Apuestas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">${match.teamHome} - ${match.teamAway}</h5>
              <h5 class="card-title text-success">${match.goalsHome} : ${match.goalsAway}</h5>
              <p class="card-text">${new Date(match.date)}</p>
              <a href="#" class="btn btn-primary">Apostar</a>
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
