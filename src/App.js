import './App.scss';


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact render={() => <h1>HOLA</h1>} />
        <Redirect to="/" />
      </Switch>
    </Router>

  );
}

export default App;
