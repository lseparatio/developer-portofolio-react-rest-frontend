//import logo from './logo.svg';
//import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";

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
          <Route exact path="/signin" element={<h1>Sign in</h1>} />
          <Route exact path="/signup" element={<h1>Sign up</h1>} />
          <Route element={() => <p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
