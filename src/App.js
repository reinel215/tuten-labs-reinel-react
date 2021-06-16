import './App.scss';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//Screens
import Login from './components/Screens/Login';
import Bookings from './components/Screens/Bookings';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/bookings" exact component={Bookings} />
        <Redirect to="/" />
      </Switch>
    </Router>

  );
}

export default App;
