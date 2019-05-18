import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Repositores from './pages/Repositores';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repositores,
    },
    {
      initialRouteName: userLogged ? 'Repositores' : 'Welcome',
    },
  ),
);

export default Routes;
