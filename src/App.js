import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home'
import Profile from './components/Profile';
import Greeting from './components/Greeting';

// CSS Style
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='/greeting' element={<Greeting />} /> */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;

