import './App.scss';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//Screens
import Login from './components/Screens/Login';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>

  );
}

export default App;