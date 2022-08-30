import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './pages/Login/loginPage'
import SignupPage from './pages/signup/signupPage'
import HomePage from './pages/home/HomePage'
import CreatEventPage from './pages/CreatEventPage/CreatEventPage';
import MyEventPage from './pages/MyEventPage/MyEventPage';

function App() {
  console.log(sessionStorage.getItem('loggedIn'))
  return (
    
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<><LoginPage/></>}/>
          <Route path="/signup" element={<><SignupPage/></>}/>
          
          <Route path="/createvent" element={sessionStorage.getItem('loggedIn')? <><CreatEventPage/></> : <><LoginPage/></>}/> 
          <Route path="/myevent" element={<><MyEventPage/></>}/> 
          <Route path="*" element={<><HomePage/></>}/>
          
               
        </Routes>
      </div>
    </Router>
  );
}

export default App;
