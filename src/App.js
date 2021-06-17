import { lazy, Suspense } from 'react';

import './App.scss';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/Atoms/Router/PrivateRoute';



//Screens
const Login = lazy(() => import("./components/Screens/Login"));
const Bookings = lazy(() => import('./components/Screens/Bookings'))
const Hour = lazy(() => import('./components/Screens/Hour'))




function App() {
  return (

    <Router>
      <Suspense fallback={ <p>Espere...</p> } >
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/hour" exact component={Hour} />
          <PrivateRoute path="/bookings" exact component={Bookings} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>

  );
}

export default App;
