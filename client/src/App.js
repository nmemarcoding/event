import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/Login/loginPage'
import SignupPage from './pages/signup/signupPage'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<><LoginPage/></>}/>
          <Route path="/signup" element={<><SignupPage/></>}/>
          <Route path="*" element={<><HomePage/></>}/>
          
               
        </Routes>
      </div>
    </Router>
  );
}

export default App;
