import logo from './logo.png'
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <div className="App">

      <Router>
        <Home />
      </Router>
      
    </div>
  );
}

export default App;
