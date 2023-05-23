import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Input from './components/input';
import PersonalData from './components/personaldata';
import GlobalData from './components/globaldata';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./components.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<GlobalData />} />
          <Route path="/personaldata" element={<PersonalData />} />
          <Route path="/tripinput" element={<Input />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
