import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Team from './components/Team/Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';



function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Team></Team>
          </Route>
          <Route path="/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
