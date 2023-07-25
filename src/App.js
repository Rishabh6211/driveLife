
import './App.css';
import Header from './container/header/Header';
import Main from './container/body/body';
import DetailPage from './components/DetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './container/signUp/signupForm';
import SignInForm from './container/signIn/signIn';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/image/:id" element={<DetailPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SignInForm />} />
        {/* Add other routes if needed */}
        <Route path="*" element={<Main />} />
      </Routes>
      
    </Router>
  );
}

export default App;
