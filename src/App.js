import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/CheckInAdmin';
import TableList from './components/TableList';
// import Greeting from './components/Greeting';
import CheckIn from './components/CheckIn';

// CSS Style
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkin' element={<CheckIn />} />

          <Route path='/admin' element={<Home />} />
          <Route path='/admin/profile' element={<Profile />} />
          <Route path='/admin/oversea' element={<TableList />} />
          {/* <Route path='/greeting' element={<Greeting />} /> */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;

