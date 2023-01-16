//import logo from './logo.svg';
//import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults'
import SignInForm from './pages/auth/SignInForm';
import SignUpForm from './pages/auth/SignUpForm';



function App() {

  return (

    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<h1>Home page</h1>} />
          <Route exact path="/about" element={<h1>About</h1>} />
          <Route exact path="/projects" element={<h1>Projects</h1>} />
          <Route exact path="/blog" element={<h1>Blog</h1>} />
          <Route exact path="/contact" element={<h1>Contact</h1>} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route element={() => <p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;
