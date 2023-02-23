//import logo from './logo.svg';
//import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults'
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';
import NotFound from './components/NotFound';
import ProfileDisplay from './pages/profile/ProfileDisplay';
import ProfileUpdate from './pages/profile/ProfileUpdate';
import { useCurrentUser } from './contexts/CurrentUserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';


function App() {
  const currentUser = useCurrentUser();
  const id = currentUser[0]?.profile_id?.toString();
  const username = currentUser[0]?.username?.toString();
  return (

    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<h1>About</h1>} />
          <Route exact path="/projects" element={<h1>Projects</h1>} />
          <Route exact path="/blog" element={<h1>Blog</h1>} />
          <Route exact path="/contact" element={<h1>Contact</h1>} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path={`/profile/${username}`} element={<ProfileDisplay />} />
          <Route exact path={`/profile/update/${id}`} element={<ProfileUpdate />} />
          {/* 404 rounte */}
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <ToastContainer />
    </div>

  );
}

export default App;
