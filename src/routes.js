import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Repositores from './pages/Repositores';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositores,
  }),
);

export default Routes;
