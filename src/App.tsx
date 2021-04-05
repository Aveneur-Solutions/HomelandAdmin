import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar/>
    </Router>
  );
}

export default App;
