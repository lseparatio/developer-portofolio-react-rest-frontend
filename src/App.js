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
import Footer from './components/Footer';
import Contact from './pages/Contact';
import EmailConfirmationValidation from './components/EmailConfirmationValidation';
import ProjectDetail from './pages/ProjectDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllProjects from './pages/AllProjects';


function App() {
  const currentUser = useCurrentUser();
  const id = currentUser[0]?.profile_id?.toString();
  const username = currentUser[0]?.username?.toString();
  return (

    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* This route is for email confirmation link validation and forwarding to django backend*/}
          <Route exact path="/confirm-email/:key" element={<EmailConfirmationValidation />} />
          <Route exact path="/about" element={<h1>About</h1>} />
          <Route exact path="/projects" element={<AllProjects/>} />
          <Route exact path="/project/:id" element={<ProjectDetail />} />
          <Route exact path="/blog" element={<h1>Blog</h1>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route exact path={`/profile/${username}`} element={<ProfileDisplay />} />
          <Route exact path={`/profile/update/${id}`} element={<ProfileUpdate />} />
          {/* 404 rounte */}
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
      <ToastContainer />
    </div>

  );
}

export default App;
