import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import UserDetails from './page/UserDetails';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
