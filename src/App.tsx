import Sidebar from './components/Navbar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Dashboard/>
    </Router>
  );
}

export default App;
