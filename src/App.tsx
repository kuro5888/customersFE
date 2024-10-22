import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Customers from './Pages/Customers/Customers';
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/adminPanel">Admin</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/customers" Component={Customers} />
            <Route path="/adminPanel" Component={Admin} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
