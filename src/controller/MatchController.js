import MatchService from '../service/MatchService';
import MatchView from '../view/MatchView';
import View from '../view/View';

export default class MatchController {
  constructor() {
    View.bindLoadWindow(this.loadMatches);
  }

  async loadMatches() {
    const matches = await MatchService.getMatches();
    MatchView._renderMatches(matches);
  }
}
