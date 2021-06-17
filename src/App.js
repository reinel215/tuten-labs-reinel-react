import './App.scss';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//Screens
import Login from './components/Screens/Login';
import Bookings from './components/Screens/Bookings';
import Hour from './components/Screens/Hour';

import PrivateRoute from './components/Atoms/Router/PrivateRoute';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/hour" exact component={Hour} />
        <PrivateRoute path="/bookings" exact component={Bookings} />
        <Redirect to="/" />
      </Switch>
    </Router>

  );
}

export default App;
