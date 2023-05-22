import logo from './logo.svg';
import './App.css';
import Login from './components/screens/Login';
import MainPage from './components/screens/StudentMainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}
sjfbchsdne
export default App;
