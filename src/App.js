import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './components/MainPage';
import Greeting from './components/Greeting';

// CSS Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' element={<MainPage />} />
          <Route path='/greeting' element={<Greeting />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

