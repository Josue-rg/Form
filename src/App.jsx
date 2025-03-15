import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Profile from "./components/Porfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-data" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;