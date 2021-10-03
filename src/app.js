import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import MatchController from './controller/MatchController';
import AuthController from './controller/AuthController';

const matchController = new MatchController();
const authController = new AuthController();

// if (module.hot) {
//   module.hot.accept();
// }
